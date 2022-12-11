import { Request, Response, NextFunction } from 'express';
import Stripe from 'stripe';

import env from '../utils/env';
import { IItem } from '../types/app-types';

const stripe = new Stripe(env.stripeSecretKey, { apiVersion: '2022-08-01' });

export const checkoutProcessStripe = async (
  req: Request<never, never, IItem, never>,
  res: Response,
  next: NextFunction
) => {
  try {
    // ! Stripe Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'AR'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd',
            },
            display_name: 'Free shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
      ],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: req.body.item.name,
              description: req.body.item.description || `Item #${req.body.item.id}`,
              images: [req.body.item.image],
              metadata: {
                id: req.body.item.id,
              },
            },
            unit_amount: req.body.item.price,
          },
          quantity: 1,
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      mode: 'payment',
      success_url: `${env.clientAppUrl}/profile?success=true&itemId=${req.body.item.id}&userId=${req.body.userId}`,
      cancel_url: `${env.clientAppUrl}/profile`,
    });

    if (session.url) {
      return res.status(303).json({ url: session.url });
    }

    return res.status(500).json({ message: 'Stripe failed', error: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

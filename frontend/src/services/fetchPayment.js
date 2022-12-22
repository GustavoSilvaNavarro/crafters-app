import { env } from '../helpers/env';

export const paymentApi = async item => {
  try {
    const res = await fetch(`${env.urlBase}/purchase/create-checkout-session`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
      body: JSON.stringify(item),
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

import { env } from '../helpers/env';

export const createNewOrder = async (idUser, idPost) => {
  try {
    const result = await fetch(`${env.urlBase}/orders/create-order/user/${idUser}/post/${idPost}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
    });

    return await result.json();
  } catch (err) {
    console.error(err);
  }
};

import { env } from '../helpers/env';

export const getSingleWish = async (idUser, idPost) => {
  try {
    const data = await fetch(`${env.urlBase}/wishlist/user/${idUser}/post/${idPost}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
    });

    return await data.json();
  } catch (err) {
    console.error(err);
  }
};

export const addPostToWishList = async body => {
  try {
    const data = await fetch(`${env.urlBase}/wishlist`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
      body: JSON.stringify(body),
    });

    return await data.json();
  } catch (err) {
    console.error(err);
  }
};

export const deleteWish = async id => {
  try {
    const res = await fetch(`${env.urlBase}/wishlist/delete/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export const getListWishListByUser = async idUser => {
  try {
    const data = await fetch(`${env.urlBase}/wishlist/${idUser}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
    });

    return await data.json();
  } catch (err) {
    console.error(err);
  }
};

export const getNumberOfFavs = async idUser => {
  try {
    const data = await fetch(`${env.urlBase}/wishlist/number-favs/${idUser}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
    });

    return await data.json();
  } catch (err) {
    console.error(err);
  }
};

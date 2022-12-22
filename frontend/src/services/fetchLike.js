import { env } from '../helpers/env';

export const getSingleLike = async (idUser, idPost) => {
  try {
    const data = await fetch(`${env.urlBase}/likes/user/${idUser}/post/${idPost}`, {
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

export const addLikeToPost = async body => {
  try {
    const data = await fetch(`${env.urlBase}/likes`, {
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

export const deleteLike = async id => {
  try {
    const res = await fetch(`${env.urlBase}/likes/delete/${id}`, {
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

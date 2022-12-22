import { env } from '../helpers/env';

export const createNewComment = async newComment => {
  try {
    if (newComment) {
      const data = await fetch(`${env.urlBase}/comments`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': `${env.urlBase}`,
        },
        body: JSON.stringify(newComment),
      });

      const res = await data.json();
      return res;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getCommentsByPost = async id => {
  try {
    if (!isNaN(Number(id))) {
      const allComments = await fetch(`${env.urlBase}/comments/${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': `${env.urlBase}`,
        },
      });

      return await allComments.json();
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteComment = async idComment => {
  try {
    if (!isNaN(Number(idComment))) {
      const data = await fetch(`${env.urlBase}/comments/delete/${idComment}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': `${env.urlBase}`,
        },
      });

      return await data.json();
    }
  } catch (err) {
    console.error(err);
  }
};

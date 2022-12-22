import axios from 'axios';

import { env } from '../helpers/env';

export const retrievePosts = async email => {
  try {
    if (!email) return;

    const data = await fetch(`${env.urlBase}/posts/${email}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
    });
    const posts = await data.json();

    return posts;
  } catch (err) {
    console.error(err);
  }
};

export const createNewPost = async post => {
  try {
    if (post) {
      const fd = new FormData();
      for (const name in post) {
        fd.append(name, post[name]);
      }

      const data = await fetch(`${env.urlBase}/posts`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': `${env.urlBase}`,
        },
        body: fd,
      });

      const resp = await data.json();
      return resp;
    }
  } catch (err) {
    console.error(err);
  }
};

export const retrieveUser = async userEmail => {
  try {
    if (!userEmail) return;
    const data = await fetch(`${env.urlBase}/user/${userEmail}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
    });
    const newUser = await data.json();

    return newUser;
  } catch (err) {
    console.error(err);
  }
};

export const storeUser = async body => {
  try {
    const data = await fetch(`${env.urlBase}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
      body: JSON.stringify(body),
    });

    const res = await data.json();
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const updateUserInfo = async (id, info) => {
  try {
    if (!id) return;

    if (info) {
      const formData = new FormData();
      for (const name in info) {
        formData.append(name, info[name]);
      }

      const data = await axios.put(`${env.urlBase}/user/${id}`, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': `${env.urlBase}`,
        },
      });

      const userUpdated = data.data;
      return userUpdated;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getSinglePostData = async id => {
  try {
    if (!id) return;

    const singlePost = await axios.get(`${env.urlBase}/posts/single-post/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
    });

    if (singlePost.status === 200) return singlePost.data;
    else return null;
  } catch (err) {
    console.error(err);
  }
};

export const getAllPosts = async () => {
  try {
    const data = await fetch(`${env.urlBase}/listPosts`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${env.urlBase}`,
      },
    });

    const allPosts = await data.json();

    return allPosts;
  } catch (err) {
    console.error(err);
  }
};

export const deleteSinglePost = async idPost => {
  try {
    if (!isNaN(Number(idPost))) {
      const data = await fetch(`${env.urlBase}/posts/delete-post/${idPost}`, {
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

export const updateStateOfPost = async idPost => {
  try {
    if (!isNaN(Number(idPost))) {
      const data = await fetch(`${env.urlBase}/posts/update-post/${idPost}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': `${env.urlBase}`,
        },
        body: JSON.stringify({ sold: true }),
      });

      return await data.json();
    }
  } catch (err) {
    console.error(err);
  }
};

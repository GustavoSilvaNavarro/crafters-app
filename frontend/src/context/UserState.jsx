import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { UserContext } from './UserContext';
import { retrieveUser, storeUser } from '../services/fetchData';

export const UserState = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      retrieveUser(user.email).then(data => {
        if (data) {
          setUserData(data);
        } else {
          const newUser = {
            email: user.email,
            bio: '',
            username: user.nickname,
            name: '',
            userPicUrl: user.picture,
          };

          storeUser(newUser).then(info => {
            if (!info.error) {
              setUserData(info);
            }
          });
        }
      });
    }
  }, [isAuthenticated, user]);

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
};

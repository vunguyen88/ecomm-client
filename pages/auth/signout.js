import { useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import styles from '../../styles/auth.module.scss';

//KNOWN ERROR FOR MAPPED ERRORS
const SignOut = () => {
    const { doRequest } = useRequest({
        url: 'https://auth-acd3hddtua-uc.a.run.app/api/users/signout',
        // url: 'http://host.docker.internal:8000/api/users/signout',
        // url: 'http://localhost:8000/api/users/signout',
        method: 'post',
        body: {},
        onSuccess: () => Router.push('/')
      });
    
      useEffect(() => {
        doRequest();
      }, []);
    
      return (
        <div className={styles.container}>
          <div>Signing you out...</div>
        </div>
      );
};

export default SignOut;
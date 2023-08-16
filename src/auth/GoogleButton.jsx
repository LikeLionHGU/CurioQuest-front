// GoogleButton.js

// eslint-disable-next-line no-unused-vars
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
// import React, { useRef } from 'react';
// import { userLogin, userSignup } from '../apis/users';
// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { isLoginState, isRegisterModalState, userLoginInfo } from '../store/atom';
// import { useNavigate } from 'react-router-dom';
// import HeaderButton from '../components/HeaderButton';
// import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function GoogleButton() {
  // eslint-disable-next-line no-unused-vars
  let history = useHistory();

  //   const setRegisterModalState = useSetRecoilState(isRegisterModalState);
  //   const setUserLoginInfo = useSetRecoilState(userLoginInfo);
  //   const setIsLogin = useRecoilValue(isLoginState);
  // const { loginWithCredential } = useAuthContext();

  const onSuccess = async (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);
    // userLogin(decodedToken.sub)
    //   .then((response) => {
    //     if (response.data.isRegistered === true) {
    //       localStorage.setItem('accessToken', response.data.tokens.accessToken);
    //       localStorage.setItem('refreshToken', response.data.tokens.refreshToken);
    //       window.location.href = '/';
    //       setIsLogin(true);
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response.data.isRegistered === false) {
    //       console.log('ddd', error.response.data);
    //       history.push('/');
    //       setRegisterModalState(true);
    //       setUserLoginInfo(decodedToken);
    //     }
    //   });
  };

  //   const onFailure = (error) => {
  //     console.log(error);
  //   };

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => onSuccess(credentialResponse)}
        onFailure={(error) => console.log(error)}
        useOneTap
      />
    </>
  );
}

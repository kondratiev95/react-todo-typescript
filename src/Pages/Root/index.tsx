import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MAIN, SIGN_IN, SIGN_UP } from "../../path";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import Root from "../../components/Root/Root";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../redux/selectors/selectors";
import { setUserDataTokensAC } from "../../redux/actionsCreator";

const Pages = () => {
  const [isUser, setIsUser] = useState<boolean>(true);
  const accessToken = useSelector(getAccessToken)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(!accessToken) { 
      setIsUser(false);
    } else {
      setIsUser(true)
    }
  }, [accessToken]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    if(accessToken) { 
     dispatch(setUserDataTokensAC({ accessToken, refreshToken }))
    }
  }, [ dispatch ])

  useEffect(() => {
    const accessTokenLocal = localStorage.getItem('accessToken');
    if (accessTokenLocal) {
      setIsUser(true)
    }
  }, [])

  
  return (
    <BrowserRouter>
    {!isUser ? (
      <Routes>
          <Route path={SIGN_UP} element={<Signup />} />
          <Route path={SIGN_IN} element={<Signin />} />
          <Route
              path={MAIN}
              element={<Navigate to={SIGN_UP} />}
          />
        </Routes>
    ) : (
        <Routes >
          <Route path={MAIN} element={<Root/>}/>
          
        </Routes>
    ) }
    </BrowserRouter>
  );
};

export default Pages;

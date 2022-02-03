import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MAIN, SIGN_IN, SIGN_UP } from "../../../path";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import Root from "../../Root/Root";

const Pages = () => {
  const [isUser, setIsUser] = useState<boolean>(false);

  // useEffect(() => {
  //   if(!isUserData) navigate(SIGN_UP, { replace: true });
  // }, [isUserData, navigate])
  return (
    
<BrowserRouter>
{!isUser ? (
<Routes>
    <Route path={SIGN_UP} element={<Signup />} />
    <Route path={SIGN_IN} element={<Signin />} />
    <Route
        path="/"
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

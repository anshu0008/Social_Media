import React from "react";
import {useNavigate} from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google";
import logo from "../assets/logowhite.png";
import shareVideo from "../assets/share.mp4";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { client } from "../client";

const Login = () => {
  const navigate=useNavigate();
  
  const responseGoogle=(credentialResponse) => {
    var decoded = jwt_decode(credentialResponse.credential);
    localStorage.setItem('user',JSON.stringify(decoded));
    const {name,sub,picture}=decoded;
    console.log(name,sub,picture);
    const doc={
      _id:sub,
      _type:'user',
      userName:name,
      image:picture,
    }

    client.createIfNotExists(doc)
    .then(()=>{
      navigate('/',{replace:true })
    })

  }


  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="videos/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center inset-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleOAuthProvider clientId="209389022000-5bijrsmi2jrt9c9e86b1t4j881h0vtce.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={responseGoogle}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              ;
            </GoogleOAuthProvider>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <GoogleLogin
clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
render={(renderProps) => (
  <button
    type="button"
    className="bg-mainColor flex items-center justify-center p-3 rounded-lg cursor-pointer outline-none"
    onClick={renderProps.onClick}
    disabled={renderProps.disabled}
  >
    <FcGoogle className="mr-4" /> Sign in with Google
  </button>
)}
onSuccess={responseGoogle}
onFailure={responseGoogle}
cookiePolicy={'single_host_origin'}
/> */
}

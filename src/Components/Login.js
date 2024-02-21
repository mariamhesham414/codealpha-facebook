import React, { useState } from "react";

const Login = ({onLogin}) => {
  const [username , setUsername ] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if(username ==='mariam'&& password==='password') {
      localStorage.setItem('isLoggedIn', "true")

localStorage.setItem("username",username ) 
onLogin(username )   }else{
  alert("invalid login")
}
}
  return (
    <div className="p-20 h-screen w-screen flex flex-col md:flex-row items-center justify-center bg-[#F0F2F5]">
      <div className=" content text-3xl text-center md:text-left p-5">
        <h1 className="text-5xl text-[#0866FF] font-bold">Facebook</h1>
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <form className="shadow-lg w-[25rem] p-4 flex flex-col bg-white rounded-lg">
          <input
            type="text"
            placeholder="username"
            className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            value={username }
            onChange={(e)=>setUsername (e.target.value)}
          />
          <input
            type="password"
            placeholder="Pasword"
            className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="w-full bg-[#1877F2] text-white p-3 rounded-lg font-semibold text-lg">
            Login
          </button>
          <a className="text-[#1879F3] text-center my-2">Forgotten password?</a>
          <hr />
          <button className="w-fit flex self-center  bg-[#42B72A] mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">
            Create New Account
          </button>
        </form>
        <p className="text-center text-sm my-4">
          <span className="font-semibold text-center w-full">
            Create a Page
          </span>{" "}
          for a celebrity, band or business
        </p>
      </div>
    </div>
  );
};

export default Login;

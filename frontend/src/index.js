import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import UserContext from "./Components/useContext/UserContext";
import { App2, App3 } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const admin = sessionStorage.getItem("Admintoken");
const role = sessionStorage.getItem("Userrole");
const rrrr = ()=>{
  if(!admin && role === "vendor"){
    return (
      <>
      <App3/>
      </>
    )
  }else  if(admin){
    return(
      <>
      <App/>
      </>
    )
  }else{
    return(
      <>
      <App2/>
      </>
    )
  }
}
root.render(
  <UserContext>
    <React.StrictMode>
      <BrowserRouter>{ rrrr()}</BrowserRouter>
    </React.StrictMode>
  </UserContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

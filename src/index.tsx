import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { CERAMIC_TESTNET_HOST } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Us3rAuthWithRainbowkitProvider } from "@us3r-network/auth-with-rainbowkit";
import { ProfileStateProvider } from "@us3r-network/profile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Us3rAuthWithRainbowkitProvider
      projectId={"c652d0148879353d7e965d7f6f361e59"}
      appName="S3 Dashboard"
    >
      <ProfileStateProvider ceramicHost={CERAMIC_TESTNET_HOST}>
        <App />
      </ProfileStateProvider>
    </Us3rAuthWithRainbowkitProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

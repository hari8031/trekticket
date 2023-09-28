import React from "react";
import "../styles/global.css";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  let username = "";
  if (currentUser) {
    const emailParts = currentUser.email.split("@");
    username = emailParts[0];
  }

  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;

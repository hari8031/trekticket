import React from "react";
import "../styles/global.css";
import buildClient from "../api/build-client";
import Header from "../components/header";
import ContactForm from "../components/ContactForm";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  let username = "";
  if (currentUser) {
    const emailParts = currentUser.email.split("@");
    username = emailParts[0];
  }

  return (
    <div>
      <Header currentUser={currentUser} />
      <Component currentUser={currentUser} {...pageProps} />
      <ContactForm />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;

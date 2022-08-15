import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const handleLogInResponse = (response: { credential: string }) => {
    console.log(response.credential);
  };

  useEffect(() => {
    /* global google */
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GCP_CLIENT_ID,
      callback: handleLogInResponse,
    });

    /* global google */
    // @ts-ignore
    google.accounts.id.renderButton(
      document.getElementById("loginButton"),
      { theme: "outline", size: "large" } // customization attributes
    );
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

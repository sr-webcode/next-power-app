import "../styles/globals.css";
import { AppProps } from "next/app";
import Navigation from "components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

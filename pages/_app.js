import Header from "../components/header";
import Footer from '../components/footer'
import Meta from '../components/meta'
import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
          <Meta />
    <div className="grid min-h-screen" style={{ gridTemplateRows: "auto 1fr"}}>
    <Header />
      <Component {...pageProps} />
    </div>
    <Footer />
    </>
  );
}

import Header from "../components/header";
import Layout from "../components/layout";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

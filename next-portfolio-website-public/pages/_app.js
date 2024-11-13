import "../styles/globals.scss";
import "react-vertical-timeline-component/style.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

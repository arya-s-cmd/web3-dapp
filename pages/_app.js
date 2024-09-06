import "@/styles/globals.css";

//INTERNAL IMPORT
import { TrackingProvider } from "@/Conetxt/TrackingContext";
import { Navbar, Footer } from "@/components";


export default function App({ Component, pageProps }) {
  return (
    <>
    <TrackingProvider>
    <Navbar/>
    <Component {...pageProps} />
    </TrackingProvider>
    <Footer/>
    </>
    );
  }
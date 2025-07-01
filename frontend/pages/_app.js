import { useEffect } from 'react';
import AnalyticsTracker from '../components/AnalyticsTracker';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnalyticsTracker />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

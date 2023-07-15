import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Analytics />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

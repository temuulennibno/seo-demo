import HeadProvider from "@/contexts/headContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeadProvider>
      <Component {...pageProps} />
    </HeadProvider>
  );
}

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  return <SessionProvider session={session}>
    <Provider store={store}>
      <Component {...pageProps} />

    </Provider>
  </SessionProvider>
}

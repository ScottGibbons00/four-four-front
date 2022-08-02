import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import Landing from "./landing";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

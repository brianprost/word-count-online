import '../styles/globals.css'
import "@fontsource/ibm-plex-sans-arabic"
import '@fontsource/major-mono-display'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

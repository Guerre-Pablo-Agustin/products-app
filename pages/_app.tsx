import type { AppProps } from 'next/app'

import '@vercel/examples-ui/globals.css'
import Header from '../components/Header/Header'

function App({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default App

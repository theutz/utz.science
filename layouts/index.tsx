import { ReactNode, SFC } from 'react'

import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles'

import theme from '../theme'

const Page: SFC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/safari-pinned-tab.svg"
          color="#44344f"
        />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <meta name="theme-color" content="#eae0d5" />
        <link
          href="https://fonts.googleapis.com/css?family=Yrsa"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

export default Page

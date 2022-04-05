
/* CSS */import '../styles/reset.scss'
import '../styles/global.scss'

import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0'
import AuthProvider from '../components/providers/AuthProvider'
import AppShell from '../components/AppShell'
import WebSocketProvider from '../components/providers/WebSocketProvider'

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthProvider>
        <WebSocketProvider>
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        </WebSocketProvider>
      </AuthProvider >
    </UserProvider>
  )
}

export default App

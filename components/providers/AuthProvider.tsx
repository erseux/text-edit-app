import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { useUser } from '@auth0/nextjs-auth0'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/dist/frontend'
import { ProvideAuth } from '../../lib/auth/useAuth'
import React, { useEffect, useState } from 'react'
import { WebSocketLink } from '@apollo/client/link/ws'
import axios from 'axios'
import { DOC_COLAB_API_HOSTNAME, DOC_COLAB_API_WEBSOCKETS_SCHEME } from '../../lib/env'

function createApolloClient(authToken: string): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: `${DOC_COLAB_API_WEBSOCKETS_SCHEME}://${DOC_COLAB_API_HOSTNAME}/v1/graphql`,

      options: {
        reconnect: true,
        connectionParams: async () => {
          return {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        },
      },
    }),
    cache: new InMemoryCache(),
  })
}

const AuthProvider = withPageAuthRequired(function AuthProvider({ children }): JSX.Element {
  const { user } = useUser()

  useEffect(() => {
    const getSession = async () => {
      axios.get('/api/session').then(response => {
        setClient(createApolloClient(response.data.idToken))
      })
    }
    getSession()
  }, [user])

  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>()

  if (!client || !user) return <>load</>

  return (
    <ApolloProvider client={client}>
      <ProvideAuth idpId={user.sub}>{children}</ProvideAuth>
    </ApolloProvider>
  )
})

export default AuthProvider

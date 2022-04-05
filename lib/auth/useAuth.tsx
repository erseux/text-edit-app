import { useQuery } from '@apollo/client'
import { createContext, useContext, useMemo, useState } from 'react'
import { MeMyselfAndIDocument } from './auth.generated'
import { AuthContext } from './auth.types'

export const defaultValue: AuthContext = { type: 'unauthenticated' }
const authContext = createContext<AuthContext>(defaultValue)

export function ProvideAuth({ idpId, children }) {
  const auth = useProvideAuth(idpId)
  /*
  TODO: Fix loader
  */
  if (!auth || auth.type === 'unauthenticated') return <p>load</p>
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export function useAuth() {
  const ctx = useContext(authContext)
  return ctx
}

function useProvideAuth(idpId: string): AuthContext {
  const [user, setUser] = useState<AuthContext>(defaultValue)
  const { data } = useQuery(MeMyselfAndIDocument, {
    variables: {
      userIdpId: idpId,
    },
    skip: !idpId,
  })

  useMemo(() => {
    if (data?.users.length) {
      setUser({ profile: { ...data?.users[0] }, user: { ...data.users[0] }, type: 'authn' })
    }
  }, [data])
  return user
}

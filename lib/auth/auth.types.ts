export type UserIds = Readonly<{
  /**
   * This is the Id as it is in our database.
   */
  id: string
  /**
   * This is the Id as it is in Auth0's database.
   */
  idpId: string

  email: string
}>

export type UserProfile = {
  nickname?: string
  avatar?: string
  email: string
}
export type Authn = {
  user?: UserIds
  profile?: UserProfile
}

export type AuthContext = Authn & { type: 'unauthenticated' | 'authn' }

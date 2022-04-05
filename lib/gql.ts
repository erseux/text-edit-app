
export async function gqlFetch(query: string, variables: Record<string, unknown>) {
    const HASURA_ADMIN_KEY = "dGfcd13o7UZU9asSOPLDvixFxXKrP3o70UJR4H4nq4K0nKOuU3CWaMDbSaOaaGnx"
    const API_HOSTNAME = 'https://dashing-sloth-59.hasura.app/v1/graphql'
    if (HASURA_ADMIN_KEY == null) {
      throw new Error('Missing env var "LOGARY_HASURA_ADMIN_SECRET"')
    }
    const res = await fetch(API_HOSTNAME, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-hasura-admin-secret': HASURA_ADMIN_KEY,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    if (res.status != 200) {
      console.error(res)
      throw new Error('Invalid status code ' + res.status)
    }
  
    const body = await res.json()
  
    return body
  }
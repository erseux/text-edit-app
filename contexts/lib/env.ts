export const DOC_COLAB_API_HOSTNAME: 'https://dashing-sloth-59.hasura.app' | string =
  process.env.NEXT_PUBLIC_DOC_COLAB_API_HOSTNAME


export const DOC_COLAB_API_WEBSOCKETS_SCHEME: 'ws' | 'wss' =
  typeof process.env.NEXT_PUBLIC_DOC_COLAB_API_WEBSOCKETS_SCHEME === 'undefined'
    ? 'wss'
    : (process.env.NEXT_PUBLIC_DOC_COLAB_API_WEBSOCKETS_SCHEME as 'ws' | 'wss')

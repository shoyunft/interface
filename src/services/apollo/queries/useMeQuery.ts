import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  query MeQuery {
    me {
      id
      chainId
      address
      name
      username
      email
      bio
      profilePicture
      website
      discord
      telegram
      twitter
      facebook
      instagram
      tiktok
      youtube
      twitch
    }
  }
`

const useMeQuery = (chainId: number, authSignature: string) =>
  useQuery(QUERY, {
    context: {
      headers: {
        'Chain-Id': chainId,
        'Auth-Signature': authSignature,
      },
    },
  })

export default useMeQuery

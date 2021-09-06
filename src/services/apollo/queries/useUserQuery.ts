import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  query UserQuery($userAddress: Address!) {
    user(address: $userAddress) {
      id
      chainId
      address
      username
      name
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

const useUserQuery = (chainId: number, userAddress: string) =>
  useQuery(QUERY, {
    variables: {
      userAddress,
    },
    context: {
      headers: {
        'Chain-Id': chainId,
      },
    },
  })

export default useUserQuery

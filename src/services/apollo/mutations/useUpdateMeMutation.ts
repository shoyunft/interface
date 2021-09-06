import { gql, useMutation } from '@apollo/client'
import UserInput from '../types/UserInput'

const MUTATION = gql`
  mutation Mutation($updateMeInput: UserInput!) {
    updateMe(input: $updateMeInput) {
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

const useUpdateMeMutation = (chainId: number, updateMeInput: UserInput) =>
  useMutation(MUTATION, {
    variables: {
      updateMeInput,
    },
    context: {
      headers: {
        'Chain-Id': chainId,
      },
    },
  })

export default useUpdateMeMutation

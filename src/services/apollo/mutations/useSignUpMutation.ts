import { gql, useMutation } from '@apollo/client'
import UserInput from '../types/UserInput'

const MUTATION = gql`
  mutation Mutation($signUpInput: UserInput!) {
    signUp(input: $signUpInput) {
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

const useSignUpMutation = (chainId: number, signUpInput: UserInput) =>
  useMutation(MUTATION, {
    variables: {
      signUpInput,
    },
    context: {
      headers: {
        'Chain-Id': chainId,
      },
    },
  })

export default useSignUpMutation

import { gql, useMutation } from '@apollo/client'

const MUTATION = gql`
  mutation Mutation {
    sync {
      chainId
    }
  }
`

const useSyncMutation = (chainId: number) =>
  useMutation(MUTATION, {
    context: {
      headers: {
        'Chain-Id': chainId,
      },
    },
  })

export default useSyncMutation

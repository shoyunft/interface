import { gql, useMutation } from '@apollo/client'

const MUTATION = gql`
  mutation Mutation($updateNfTsInput: UpdateNFTsInput!) {
    updateNFTs(input: $updateNfTsInput) {
      id
      contract {
        id
        chainId
        address
        standard
        owner
        name
        symbol
        royaltyFeeRecipient
        royaltyFee
        txHash
        confirmed
      }
      tokenId
      parked
      name
      description
      image
      owners {
        owner
        balance
      }
    }
  }
`

interface UpdateNFTsInput {
  contract: string
  tokenIds: number[]
  names: string[]
  descriptions: string[]
  images: string[]
}

const useUpdateNftMutation = (chainId: number, authSignature: string, updateNfTsInput: UpdateNFTsInput) =>
  useMutation(MUTATION, {
    variables: {
      updateNfTsInput,
    },
    context: {
      headers: {
        'Chain-Id': chainId,
        'Auth-Signature': authSignature,
      },
    },
  })

export default useUpdateNftMutation

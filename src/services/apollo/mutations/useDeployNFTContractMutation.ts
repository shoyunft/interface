import { gql, useMutation } from '@apollo/client'

const MUTATION = gql`
  mutation Mutation($deployNftContractInput: DeployNFTContractInput!) {
    deployNFTContract(input: $deployNftContractInput) {
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
  }
`

interface DeployNFTContractInput {
  standard: string
  owner: string
  name: string | null
  symbol: string | null
  toTokenId: number | null
  tokenIds: number[] | null
  amounts: number[] | null
  royaltyFeeRecipient: string
  royaltyFee: number
}

const useDeployNFTContractMutation = (
  chainId: number,
  authSignature: string,
  deployNftContractInput: DeployNFTContractInput
) =>
  useMutation(MUTATION, {
    variables: {
      deployNFTContractInput: deployNftContractInput,
    },
    context: {
      headers: {
        'Chain-Id': chainId,
        'Auth-Signature': authSignature,
      },
    },
  })

export default useDeployNFTContractMutation

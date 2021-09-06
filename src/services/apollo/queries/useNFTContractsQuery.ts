import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  query NFTContractsQuery($nftContractsOwner: Address) {
    nftContracts(owner: $nftContractsOwner) {
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

const useNFTContractsQuery = (chainId: number, nftContractsOwner: string | null) =>
  useQuery(QUERY, {
    variables: {
      nftContractsOwner,
    },
    context: {
      headers: {
        'Chain-Id': chainId,
      },
    },
  })

export default useNFTContractsQuery

import { gql, useQuery } from '@apollo/client'
import { BigNumberish } from '@ethersproject/bignumber'

const QUERY = gql`
  query NFTsQuery(
    $nftsContract: Address
    $nftsTokenId: Uint256
    $nftsParked: Boolean
    $nftsOwner: Address
    $nftsLimit: Int
    $nftsOffset: Int
  ) {
    nfts(
      contract: $nftsContract
      tokenId: $nftsTokenId
      parked: $nftsParked
      owner: $nftsOwner
      limit: $nftsLimit
      offset: $nftsOffset
    ) {
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
const useNFTContractsQuery = (
  chainId: number,
  nftsContract: string | null,
  nftsTokenId: BigNumberish | null,
  nftsParked: boolean | null,
  nftsOwner: string | null,
  nftsLimit: number | null,
  nftsOffset: number | null
) =>
  useQuery(QUERY, {
    variables: {
      nftsContract,
      nftsTokenId,
      nftsParked,
      nftsOwner,
      nftsLimit,
      nftsOffset,
    },
    context: {
      headers: {
        'Chain-Id': chainId,
      },
    },
  })

export default useNFTContractsQuery

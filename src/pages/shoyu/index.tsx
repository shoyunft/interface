import React from 'react'
import Head from 'next/head'
// import Typography from '../../components/Typography'
import { useLingui } from '@lingui/react'
// import { t } from '@lingui/macro'
// import Image from 'next/image'
import NetworkGuard from '../../guards/Network'
import { ChainId } from '@sushiswap/sdk'

const Shoyu = () => {
  const { i18n } = useLingui()

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white">
        <Head>
          <title>Shōyu NFT</title>
          <meta name="description" content="Shoyu NFT marketplace" />
        </Head>
      </div>
    </>
  )
}

Shoyu.Guard = NetworkGuard([ChainId.MAINNET])

export default Shoyu

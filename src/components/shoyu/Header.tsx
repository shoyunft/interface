import React from 'react'

import { SearchIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/outline'
import ProfileSvg from './ProfileSvg'

import { NATIVE } from '@sushiswap/sdk'

import LanguageSwitch from '../LanguageSwitch'
import Web3Network from '../Web3Network'
import Web3Status from '../Web3Status'

import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { useETHBalances } from '../../state/wallet/hooks'
import { useLingui } from '@lingui/react'

export default function Header({ height, darktheme = false, balance, border = true }) {
  function getStyle() {
    let styles = {}
    if (height) styles = Object.assign(styles, { height: height })
    return styles
  }

  const { i18n } = useLingui()
  const { account, chainId, library } = useActiveWeb3React()
  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  return (
    <div className="z-10">
      <div
        className={`hidden justify-between items-center sm:flex ${border ? 'border-b border-gray-600' : ''} ${
          darktheme ? 'bg-black text-white' : 'bg-white text-black'
        }`}
        style={getStyle()}
      >
        <div className="flex justify-center flex-1 ml-20 cursor-pointer">
          <SearchIcon width={20} height={20} />
          <span>&nbsp;Search</span>
        </div>
        <div className="flex flex-1">
          <div className="mr-6 cursor-pointer">About</div>
          <div className="mr-6 cursor-pointer">Discovery</div>
          <div className="mr-6 cursor-pointer">News</div>
          <div className="mr-6 cursor-pointer">Artists</div>
          <div className="mr-6 cursor-pointer">Gaming</div>
          <div className="cursor-pointer">Curated</div>
        </div>
        <div className="flex justify-end flex-1 mr-6">
          {library && library.provider.isMetaMask && (
            <div className="hidden sm:inline-block">
              <Web3Network />
            </div>
          )}

          <div className="w-auto flex items-center rounded bg-dark-900 hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
            {account && chainId && userEthBalance && (
              <>
                <div className="px-3 py-2 text-primary text-bold">
                  {userEthBalance?.toSignificant(4)} {NATIVE[chainId].symbol}
                </div>
              </>
            )}
            <Web3Status />
          </div>
          <div className="hidden md:block">
            <LanguageSwitch />
          </div>
          {/* {!balance ? (
            `Log in`
          ) : (
            <div className="flex">
              <div className="mr-4">{balance}&nbsp;ETH</div>
              <div className="flex items-center justify-center">
                <span className="mr-2">{account}</span>
                <ProfileSvg width={20} height={20} fill={`${darktheme ? '#ffffff' : '#000000'}`} />
              </div>
            </div>
          )} */}
        </div>
      </div>
      <div
        className={`flex sm:hidden justify-end items-center w-full pr-4 cursor-pointer ${
          border ? 'border-b border-gray-600' : ''
        } ${darktheme ? 'bg-black text-white' : 'bg-white text-black'}`}
        style={getStyle()}
      >
        <PlusIcon width={20} height={20} />
        <span>&nbsp;Menu</span>
      </div>
    </div>
  )
}

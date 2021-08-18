import React from 'react'

import { SearchIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/outline'
import ProfileSvg from './ProfileSvg'

export default function Header({ height, darktheme = false, balance, account, border = true }) {
  function getStyle() {
    let styles = {}
    if (height) styles = Object.assign(styles, { height: height })
    return styles
  }
  return (
    <div className="z-50">
      <div
        className={`hidden justify-between items-center sm:flex ${border ? 'border-b border-gray-600' : ''} ${
          darktheme ? 'bg-black text-white' : 'bg-white text-black'
        }`}
        style={getStyle()}
      >
        <div className="flex flex-1 justify-center ml-20 cursor-pointer">
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
        <div className="flex flex-1 justify-end mr-6">
          {!balance ? (
            `Log in`
          ) : (
            <div className="flex">
              <div className="mr-4">{balance}&nbsp;ETH</div>
              <div className="flex items-center justify-center">
                <span className="mr-2">{account}</span>
                <ProfileSvg width={20} height={20} fill={`${darktheme ? '#ffffff' : '#000000'}`} />
              </div>
            </div>
          )}
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

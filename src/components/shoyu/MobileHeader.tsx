import React from 'react'

import { PlusIcon } from '@heroicons/react/outline'

export default function MobileHeader({ height, darktheme = false, balance, account }) {
  function getStyle() {
    let styles = {}
    if (height) styles = Object.assign(styles, { height: height })
    return styles
  }
  return (
    <div
      className={`flex justify-end items-center cursor-pointer pr-4 ${
        darktheme ? 'bg-black text-white' : 'bg-white text-black border-b border-gray-400'
      }`}
      style={getStyle()}
    >
      <PlusIcon width={20} height={20} />
      <span>&nbsp;Menu</span>
    </div>
  )
}

import React from 'react'

export default function Footer({ height }) {
  function getStyle() {
    let styles = {}
    if (height) styles = Object.assign(styles, { height: height })
    return styles
  }
  return (
    <div className="flex flex-col w-full p-5 text-white bg-black" style={getStyle()}>
      <div className="flex flex-col w-full border-b border-gray-600 sm:flex-row">
        <div className="flex-1 pb-20 sm:pb-40">&nbsp;</div>
        <div className="flex-1 pb-5 sm:pb-40">Stay in the loop on CryptoArt and NFTs</div>
        <div className="flex-1 pb-10 text-gray-600 sm:pb-40">Type your email here..</div>
      </div>
      <div className="flex flex-col w-full pt-2 sm:flex-row">
        <div className="flex flex-col flex-1 pb-10 border-b border-gray-600 sm:pb-20">
          <div className="text-sm text-gray-500">Links</div>
          <div className="grid grid-cols-2 pt-3">
            <div>Trending</div>
            <div>About</div>
            <div>Discovery</div>
            <div>Curated</div>
            <div>News</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 pb-10 border-b border-gray-600 sm:pb-0">
          <div className="pt-2 text-sm text-gray-500 sm:pt-0">For artists</div>
          <div className="grid grid-cols-2 pt-3">
            <div>Get started</div>
            <div>Tutorials</div>
            <div>Log in</div>
            <div>Support</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 pb-10 border-b border-gray-600 sm:pb-0">
          <div className="pt-2 text-sm text-gray-500 sm:pt-0">Legal</div>
          <div className="grid grid-cols-2 pt-3">
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
            <div>Community Guidelines</div>
            <div>Report content</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full pt-5 mb-10 sm:flex-row">
        <div className="flex-1 pb-10 sm:pb-0">© 2021 Shoyu. All rights reserved.</div>
        <div className="flex flex-col flex-1 sm:flex-row">
          <div className="pb-3 sm:pb-0">We use cookies for better service.</div>
          <div className="flex flex-row">
            <div className="pl-0 underline cursor-pointer sm:pl-3">Accept</div>
            <div className="pl-3 underline cursor-pointer">Decline</div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

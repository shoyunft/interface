import React from 'react'

export default function MobileFooter({ height }) {
  function getStyle() {
    let styles = {}
    if (height) styles = Object.assign(styles, { height: height })
    return styles
  }
  return (
    <div className="flex p-5 bg-black text-white flex-col w-full" style={getStyle()}>
      <div className="w-full flex border-b border-gray-600 flex-col">
        <div className="flex-1 pb-20">&nbsp;</div>
        <div className="flex-1 pb-5">Stay in the loop on CryptoArt and NFTs</div>
        <div className="flex-1 text-gray-600 pb-10">Type your email here..</div>
      </div>
      <div className="w-full flex flex-col pt-2">
        <div className="flex-1 flex flex-col border-b border-gray-600 pb-10">
          <div className="text-gray-500 text-sm">Links</div>
          <div className="grid grid-cols-2 pt-3">
            <div>Trending</div>
            <div>About</div>
            <div>Discovery</div>
            <div>Curated</div>
            <div>News</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col border-b border-gray-600 pb-10">
          <div className="text-gray-500 text-sm pt-2">For artists</div>
          <div className="grid grid-cols-2 pt-3">
            <div>Get started</div>
            <div>Tutorials</div>
            <div>Log in</div>
            <div>Support</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col border-b border-gray-600 pb-10">
          <div className="text-gray-500 text-sm pt-2">Legal</div>
          <div className="grid grid-cols-2 pt-3">
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
            <div>Community Guidelines</div>
            <div>Report content</div>
          </div>
        </div>
      </div>
      <div className="w-full flex pt-5 flex-col mb-10">
        <div className="flex-1 pb-10">© 2021 Shoyu. All rights reserved.</div>
        <div className="flex-1 flex flex-col">
          <div className="pb-3">We use cookies for better service.</div>
          <div className="flex flex-row">
            <div className="underline pl-0 cursor-pointer">Accept</div>
            <div className="underline pl-3 cursor-pointer">Decline</div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

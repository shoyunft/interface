import React from 'react'

import { ChevronDownIcon } from '@heroicons/react/outline'
import PriceScroll from './PriceScroll'

export default function SearchBox({ height }) {
  function getStyle() {
    let styles = {}
    if (height) styles = Object.assign(styles, { height: height })
    return styles
  }
  return (
    <div className="flex bg-black text-white flex-col w-full" style={getStyle()}>
      <div className="hidden sm:flex w-full border-b border-gray-600">
        <div className="flex-1 flex flex-row">
          <div className="flex-1 flex flex-col p-5">
            <div className="text-gray-600 pb-2">Category</div>
            <div className="flex items-center cursor-pointer">
              <ChevronDownIcon width={20} height={20} className="mr-1" />
              All items
            </div>
          </div>
          <div className="border-r border-gray-600"></div>
          <div className="flex-1 flex flex-col p-5">
            <div className="flex justify-between">
              <div className="text-gray-600 test-sm">Price range</div>
              <div className="uppercase">10 sushi</div>
            </div>
            <div className="mt-5 cursor-pointer">
              <PriceScroll />
            </div>
          </div>
          <div className="border-r border-gray-600"></div>
        </div>
        <div className="flex-1 flex flex-row">
          <div className="flex-1 flex flex-col p-5">
            <div className="text-gray-600 pb-2">Colour</div>
            <div className="flex h-5 color-picker cursor-pointer"></div>
          </div>
          <div className="border-r border-gray-600"></div>
          <div className="flex-1 flex flex-col p-5">
            <div className="text-gray-600 pb-2">Price</div>
            <div className="flex items-center cursor-pointer">
              <ChevronDownIcon width={20} height={20} className="mr-1" />
              Increasing
            </div>
          </div>
          <div className="border-r border-gray-600"></div>
          <div className="flex-1 flex flex-col p-5">
            <div className="text-gray-600 pb-2">Creator</div>
            <div className="flex items-center cursor-pointer">
              <ChevronDownIcon width={20} height={20} className="mr-1" />
              Verified only
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden items-center cursor-pointer border-b border-gray-600 p-5">
        <ChevronDownIcon width={20} height={20} className="mr-1" />
        Search criterias
      </div>
      <div className="w-full flex mt-10">
        <input
          type="text"
          placeholder="Type your keywords"
          className="text-3xl sm:text-5xl m-5 pb-2 border-b border-gray-600 keyword-input"
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row p-5">
        <div className="flex-1 flex flex-col pb-10 sm:pb-20">
          <div className="text-gray-500 text-sm">Artists</div>
          <div className="grid grid-cols-2 pt-3">
            <div>ChewieShotFirst</div>
            <div>Chrisbell.eth</div>
            <div>Nahiko</div>
            <div>JC Jongwon Park</div>
            <div>Chemical messiah</div>
            <div>Subraiy</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col pb-10 sm:pb-0">
          <div className="text-gray-500 text-sm pt-2 sm:pt-0">Collectors</div>
          <div className="grid grid-cols-2 pt-3">
            <div>Aure Gimon</div>
            <div>Flat Eric</div>
            <div>Cactux</div>
            <div>0x5581...367c</div>
            <div>Liquidfty</div>
            <div>Think Flexible</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col pb-10 sm:pb-0">
          <div className="text-gray-500 text-sm pt-2 sm:pt-0">Curators</div>
          <div className="grid grid-cols-2 pt-3">
            <div>Mendez</div>
            <div>Kuzburyn</div>
            <div>Yumar</div>
            <div>Mikhail Evstafev</div>
            <div>Popins</div>
            <div>Reedy Red</div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

import styled from 'styled-components'

import { ChevronDownIcon } from '@heroicons/react/outline'
import PriceScroll from './PriceScroll'

const KeywordInput = styled.input`
  background: transparent;
  color: white;
  text-align: left;
  width: 100%;
  &:focus {
    outline: none;
  }
`

export default function SearchTest({ height }) {
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
        <KeywordInput
          type="text"
          value="T"
          placeholder="Type your keywords"
          onChange={(e) => {}}
          className="text-3xl sm:text-5xl m-5 pb-2 border-b border-gray-600"
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row p-5">
        <div className="flex-1 flex flex-col pb-10 sm:pb-20">
          <div className="text-gray-500 text-sm">Artists</div>
          <div className="pt-3 text-3xl sm:text-5xl text-gray-600">
            <div>
              <span className="text-white">T</span>ravis Blake
            </div>
            <div>
              <span className="text-white">T</span>ribial X
            </div>
            <div>
              <span className="text-white">T</span>riangles
            </div>
            <div>
              <span className="text-white">T</span>rue typer
            </div>
            <div>
              <span className="text-white">T</span>ula
            </div>
            <div>
              <span className="text-white">T</span>ropical
            </div>
            <div>
              <span className="text-white">T</span>ento
            </div>
            <div>
              <span className="text-white">T</span>wi3
            </div>
            <div>
              <span className="text-white">T</span>opo
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col pb-10 sm:pb-0">
          <div className="text-gray-500 text-sm pt-2 sm:pt-0">Artworks</div>
          <div className="pt-3 text-3xl sm:text-5xl text-gray-600">
            <div>
              <span className="text-white">T</span>rocadero
            </div>
            <div>
              <span className="text-white">T</span>utto Bueno
            </div>
            <div>
              <span className="text-white">T</span>ripPop
            </div>
            <div>
              <span className="text-white">T</span>ricolore
            </div>
            <div>
              <span className="text-white">T</span>uxo
            </div>
            <div>
              <span className="text-white">T</span>angalaro
            </div>
            <div>
              <span className="text-white">T</span>xipotle
            </div>
            <div>
              <span className="text-white">T</span>oory
            </div>
            <div>
              <span className="text-white">T</span>vix233
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col pb-10 sm:pb-0">
          <div className="text-gray-500 text-sm pt-2 sm:pt-0">Curators</div>
          <div className="pt-3 text-3xl sm:text-5xl text-gray-600">
            <div>
              <span className="text-white">T</span>elegraph
            </div>
            <div>
              <span className="text-white">T</span>esaurus
            </div>
            <div>
              <span className="text-white">T</span>rue type
            </div>
            <div>
              <span className="text-white">T</span>rendhub
            </div>
            <div>
              <span className="text-white">T</span>om Dixon
            </div>
            <div>
              <span className="text-white">T</span>e Hives
            </div>
            <div>
              <span className="text-white">T</span>owers
            </div>
            <div>
              <span className="text-white">T</span>on Collins
            </div>
            <div>
              <span className="text-white">T</span>he moon
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

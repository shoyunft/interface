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

export default function MobileSearchBox({ height }) {
  function getStyle() {
    let styles = {}
    if (height) styles = Object.assign(styles, { height: height })
    return styles
  }
  return (
    <div className="flex bg-black text-white flex-col w-full" style={getStyle()}>
      <div className="flex items-center cursor-pointer border-b border-gray-600 p-5">
        <ChevronDownIcon width={20} height={20} className="mr-1" />
        Search criterias
      </div>
      <div className="w-full flex mt-10">
        <KeywordInput
          type="text"
          placeholder="Type your keywords"
          className="text-3xl m-5 pb-2 border-b border-gray-600"
        />
      </div>
      <div className="w-full flex flex-col p-5">
        <div className="flex-1 flex flex-col pb-10">
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
        <div className="flex-1 flex flex-col pb-10">
          <div className="text-gray-500 text-sm pt-2">Collectors</div>
          <div className="grid grid-cols-2 pt-3">
            <div>Aure Gimon</div>
            <div>Flat Eric</div>
            <div>Cactux</div>
            <div>0x5581...367c</div>
            <div>Liquidfty</div>
            <div>Think Flexible</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col pb-10">
          <div className="text-gray-500 text-sm pt-2">Curators</div>
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

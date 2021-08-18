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

export default function MobileSearchTest({ height }) {
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
          value="T"
          placeholder="Type your keywords"
          onChange={(e) => {}}
          className="text-3xl m-5 pb-2 border-b border-gray-600"
        />
      </div>
      <div className="w-full flex flex-col p-5">
        <div className="flex-1 flex flex-col pb-10">
          <div className="text-gray-500 text-sm">Artists</div>
          <div className="pt-3 text-3xl">
            <div>Travis Blake</div>
            <div>Tribial X</div>
            <div>Triangles</div>
            <div>True typer</div>
            <div>Tula</div>
            <div>Tropical</div>
            <div>Tento</div>
            <div>Twi3</div>
            <div>Topo</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col pb-10">
          <div className="text-gray-500 text-sm pt-2">Artworks</div>
          <div className="pt-3 text-3xl">
            <div>Trocadero</div>
            <div>Tutto Bueno</div>
            <div>TripPop</div>
            <div>Tricolore</div>
            <div>Tuxo</div>
            <div>Tangalaro</div>
            <div>Txipotle</div>
            <div>Toory</div>
            <div>Tvix233</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col pb-10">
          <div className="text-gray-500 text-sm pt-2">Curators</div>
          <div className="pt-3 text-3xl">
            <div>Telegraph</div>
            <div>Tesaurus</div>
            <div>True type</div>
            <div>Trendhub</div>
            <div>Tom Dixon</div>
            <div>Te Hives</div>
            <div>Towers</div>
            <div>Ton Collins</div>
            <div>The moon</div>
          </div>
        </div>
      </div>
    </div>
  )
}

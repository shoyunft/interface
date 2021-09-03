import React from 'react'
import Image from 'next/image'

export default function ImageCard({ timeframe, creator, price, img, reserve = false, darktheme = false }) {
  return (
    <div className={`flex flex-col ${darktheme ? 'text-white' : ''}`}>
      <div className="relative">
        <Image src={img ? require(`../../assets/shoyu/${img}.png`) : ''} alt={img} />
        {timeframe && <div className="absolute bg-white text-black left-1 top-1 p-1">{timeframe}</div>}
      </div>
      <div className="flex">
        <div className="flex-1">
          <div>The name of the artwork</div>
          {creator && <div>@{creator}</div>}
        </div>
        <div>
          {price && <div className="uppercase">{price} sushi</div>}
          <div>{reserve ? 'Reserve' : 'No reserve'}</div>
        </div>
      </div>
    </div>
  )
}

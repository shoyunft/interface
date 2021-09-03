import React from 'react'
import Image from 'next/image'

export default function ProfileCard({ name, id, pricesushi, priceusd, img, darktheme = true }) {
  return (
    <div className={`flex border-t border-gray-600 py-3 ${darktheme ? 'text-white' : ''}`}>
      <div className="flex-1 flex items-center">
        <Image src={img ? require(`../../assets/shoyu/${img}.png`) : ''} width={42} height={42} alt={img} />
        <div className="flex flex-col ml-5">
          {name && <div className="font-bold">{name}</div>}
          {id && (
            <div className="text-gray-600">
              @{` `}
              {id}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col uppercase justify-center items-end">
        {pricesushi && (
          <div className="font-bold">
            {pricesushi}
            {` `}sushi
          </div>
        )}
        {priceusd && (
          <div className="text-gray-600">
            ${` `}
            {priceusd}
          </div>
        )}
      </div>
    </div>
  )
}

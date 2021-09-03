import React from 'react'

export default function DetailCard({ id, dat, pricesushi, priceusd, darktheme = true }) {
  return (
    <div className={`flex border-t border-gray-600 py-3 ${darktheme ? 'text-white' : ''}`}>
      <div className="flex-1 flex items-center">
        <div className="flex flex-col">
          {id && (
            <div className="font-bold">
              Reserve changed by{` `}
              <span className="text-gray-600">@{id}</span>
            </div>
          )}
          {dat && <div className="text-gray-600">{dat}</div>}
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

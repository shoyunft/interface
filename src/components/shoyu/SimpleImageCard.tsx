import React from 'react'
import Image from 'next/image'

export default function SimpleImageCard({ img, title, year }) {
  return (
    <div className="flex flex-col">
      <Image src={img ? require(`../../assets/shoyu/${img}.png`) : ''} alt={img} />
      <div className="mt-3">
        {title ? title : 'Untitled'},{year ? year : ''}
      </div>
    </div>
  )
}

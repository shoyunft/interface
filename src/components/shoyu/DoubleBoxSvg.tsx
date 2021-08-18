import React from 'react'

export default function DoubleBoxSvg({ width, height, fill }) {
  const viewBox = '0 0 ' + width + ' ' + height
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50.7116 0H13.4346V5.7047H50.7116V0Z" fill={fill} />
      <path
        d="M13.4766 50.3333H50.6694V12.6123H13.4766V50.3333ZM21.0564 19.0504H43.0897V43.6723H21.0564V19.0504Z"
        fill={fill}
      />
      <path d="M5.62483 12.4629H0V50.2692H5.62483V12.4629Z" fill={fill} />
      <path d="M50.6071 58.2954H13.3301V64.0001H50.6071V58.2954Z" fill={fill} />
      <path d="M63.9998 12.6003H58.375V50.4067H63.9998V12.6003Z" fill={fill} />
    </svg>
  )
}

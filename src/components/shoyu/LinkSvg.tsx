import React from 'react'

export default function LinkSvg({ width, height }) {
  const viewBox = '0 0 ' + width + ' ' + height
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7.33333V14H8.66667V12H10.6667V16H0V5.33333H10.6667V7.33333H2Z" fill="black" />
      <path d="M16.0007 0V10.6667H5.33398V8.66667H14.0007V2H7.33398V4H5.33398V0H16.0007Z" fill="black" />
    </svg>
  )
}

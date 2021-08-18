import React, { useState, useEffect } from 'react'

export default function PriceScroll({ width, price = 10, max = 15 }) {
  const [mousedown, setMousedown] = useState(false)

  useEffect(() => {
    function windowOnMouseup() {
      setMousedown(false)
    }

    window.addEventListener('mouseup', windowOnMouseup)
    return () => {
      window.removeEventListener('mouseup', windowOnMouseup)
    }
  })

  function getStyle() {
    let styles = {
      height: '1rem',
    }
    if (width) styles = Object.assign(styles, { width: width })
    return styles
  }
  function getPriceStyle() {
    let styles = {
      width: (price / max) * 100.0 + '%',
      height: '1px',
    }
    return styles
  }
  function getRestStyle() {
    let styles = {
      width: 100 - (price / max) * 100.0 + '%',
      height: '1px',
    }
    return styles
  }
  function getBoxStyle() {
    let styles = {
      right: '-0.5rem',
      background: '#000000',
    }
    return styles
  }
  function onMouseDrag(e) {
    if (!mousedown) return
  }
  return (
    <div
      className="flex -mt-2 items-center"
      style={getStyle()}
      onMouseMove={(e) => onMouseDrag(e)}
      onMouseUp={(e) => {
        setMousedown(false)
      }}
    >
      <div className="bg-white relative" style={getPriceStyle()}>
        <div
          className="absolute border border-white w-4 h-4 border-solid -top-2 cursor-pointer"
          style={getBoxStyle()}
          onMouseDown={(e) => {
            setMousedown(true)
          }}
        ></div>
      </div>
      <div className="bg-gray-600" style={getRestStyle()}></div>
    </div>
  )
}

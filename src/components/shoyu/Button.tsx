import React from 'react'

export default function Button({ width, height, background, color, bcolor, title }) {
  function getStyle() {
    let styles = {}
    if (width) styles = Object.assign(styles, { width: width })
    if (height) styles = Object.assign(styles, { height: height })
    if (background) styles = Object.assign(styles, { background: background })
    if (color) styles = Object.assign(styles, { color: color })
    if (bcolor) styles = Object.assign(styles, { border: '1px solid ' + bcolor })
    return styles
  }
  return (
    <div className="flex justify-center items-center" style={getStyle()}>
      {title}
    </div>
  )
}

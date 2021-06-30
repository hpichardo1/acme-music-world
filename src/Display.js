import React from 'react'
import Hello from './Hello'
import DisplaySelected from './DisplaySelected'

const Display = (props) => {
  const { selected } = props
  
  return (
    <div id='display'>
      { Object.entries(selected).length === 0 ? <Hello /> :
      <DisplaySelected selected={selected} />}
    </div>
  )
}

export default Display
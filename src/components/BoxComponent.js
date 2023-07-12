import React from 'react'
import '../index.css'


const BoxComponent = (props) => {
  return (
      <div className={'box ${props.side}'}>
        { props.side === "left" ? (
            <h1 className="heading2">This is created using functional Component</h1>
        ): null}
              <p>This is done using external CSS</p>
              <p className='blue'>This is done using external CSS</p>
        </div>
    )
}
export default BoxComponent

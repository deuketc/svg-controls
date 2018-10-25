import React from 'react'

function Debug (props) {
  return (
    <>
    <p style={{marginTop:'100px'}}>Focused: {props.CurrentAction.toString()}</p>
    </>
  )
}

export default Debug;
import React from 'react'

function Debug (props) {
  return (
    <>
    <p style={{marginTop:'0px', marginBottom:'5px'}}>{props.label}: {props.CurrentAction.toString()}</p>
    </>
  )
}

export default Debug;
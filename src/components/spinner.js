import React from 'react'
import loading from "./loading.gif"

const spinner=()=> {
  
    return (
      <div className=' flex justify-center mt-4 text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  
}

export default spinner

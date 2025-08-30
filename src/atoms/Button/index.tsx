import React from 'react'
import './_button.scss';
function Button({btnText}:{btnText:string}) {
  return (
    <button className='button'>
        {btnText}
    </button>
  )
}

export default Button;


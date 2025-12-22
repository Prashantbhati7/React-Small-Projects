import React from 'react'

function Button({children,classname,bgcolor="bg-blue-500",text="click me",type,onclicktask,...props}) {
  return (
    <span>
    <button {...props} className={`${classname} ${bgcolor}  px-4 py-2 rounded-xl transition delay-75 duration-300 shadow active:scale-50 ease-in-out hover:shadow-blue-500`} onClick={()=>onclicktask()} >{children}</button>
    </span>
  )
}

export default Button

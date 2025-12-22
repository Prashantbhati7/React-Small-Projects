import React from 'react'
import treeData from './data'
import Parent from './Parent';
function Treeview() {
    console.log("tree data is ",treeData);
  return (
    <div className='max-w-2xl'>
       <Parent data = {treeData}></Parent>
    </div>
  )
}

export default Treeview

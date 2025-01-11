import React from 'react'

function Item({item}) {
  return (
        <div className={`${item.bgColor} item-${item.id} h-[10rem] w-[40rem]`}></div>
  )
}

export default Item
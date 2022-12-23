import React from 'react'

/*
height: 240px;
  min-width: 30%;
  position: relative;
  flex: 1 1 auto;
  cursor: pointer;
  overflow: scroll;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
*/

function Card(props) {
  const { cardItem } = props
  return <div className="">{JSON.stringify(cardItem)}</div>
}

export default Card

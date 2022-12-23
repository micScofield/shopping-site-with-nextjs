import React from 'react'
import Card from 'src/practice-components/card/Card'

function CardContainer(props) {
  const { cards } = props
  return (
    cards &&
    cards.length !== 0 && (
      <div className="flex flex-wrap gap-10">
        {cards.map((cardItem) => (
          <Card cardItem={cardItem} />
        ))}
      </div>
    )
  )
}

export default CardContainer

import PropTypes from 'prop-types'

import classes from 'src/common/components/card-container/card-container.module.scss'
import Card from 'src/common/components/card/Card'

function CardContainer({
  title,
  cards,
  grid,
  large,
  onTitleClick,
  titlePosition,
}) {
  // determine class for container
  const cardContainerClassName = grid
    ? classes.cardContainerGrid
    : classes.cardContainerFlex

  // determine class for title
  const titleClasses = []
  if (onTitleClick) titleClasses.push(classes.cardContainerTitle)
  if (titlePosition === 'left') {
    titleClasses.push(classes.cardContainerTitlePositionLeft)
  } else {
    titleClasses.push(classes.cardContainerTitlePositionCenter)
  }

  if (!onTitleClick) onTitleClick = () => {}

  const formattedTitle = title
    ? title.charAt(0).toUpperCase() + title.slice(1)
    : ''

  return (
    <>
      {title && (
        <h2 onClick={onTitleClick} className={titleClasses.join(' ')}>
          {formattedTitle}
        </h2>
      )}
      {cards && cards.length !== 0 && (
        <div className={cardContainerClassName} data-testid="card-container">
          {cards.map((card) => (
            <Card key={card.id} cardData={card} large={large} />
          ))}
        </div>
      )}
    </>
  )
}

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  grid: PropTypes.bool,
  large: PropTypes.bool,
}

export default CardContainer

/* eslint-disable no-bitwise */
import PropTypes from 'prop-types'
import classes from 'src/common/components/card/card.module.scss'
import Image from 'next/image'
/*
Overlay supports upto 2 values
Footer needs 2 values
*/

const Card = ({ cardData, large }) => {
  const {
    imageUrl,
    footer,
    overlay,
    overlayPosition,
    showOverlayByDefault, // for hover effect
    disableImageTransition,
  } = cardData

  let { onOverlayClick } = cardData

  // Determining CSS classes for card wrapper
  const cardWrapperCssClasses = [classes.cardWrapper]
  if (disableImageTransition)
    cardWrapperCssClasses.push(classes.disableImageTransition)
  if (large) cardWrapperCssClasses.push(classes.large)
  if (footer) cardWrapperCssClasses.push(classes.shortenedImageWrapper)

  // Determining CSS classes for image
  const backgroundImageClasses = [classes.backgroundImage]

  // Determining CSS classes for card container
  const cardContainerCssClasses = []
  if (showOverlayByDefault)
    cardContainerCssClasses.push(classes.cardBodyContainerWithOverlay)
  else cardContainerCssClasses.push(classes.cardBodyContainerWithoutOverlay)
  if (overlay && overlay.length < 2)
    cardContainerCssClasses.push(classes.overlayHeaderSmall)
  if (overlayPosition === 'bottom')
    cardContainerCssClasses.push(classes.overlayPositionBottom)

  if (!onOverlayClick) {
    onOverlayClick = () => {}
  }

  const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#F4F4F4" offset="20%" />
      <stop stop-color="#FBFBFB" offset="50%" />
      <stop stop-color="#F4F4F4" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#D3D3D3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  return (
    <div className={cardWrapperCssClasses.join(' ')}>
      {imageUrl && (
        <div
          className={`${classes.imageWrapper} ${
            footer ? classes.shortenedImageWrapper : ''
          }`}
        >
          {/* <div
            className={backgroundImageClasses.join(' ')}
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          /> */}
          <div className={backgroundImageClasses.join(' ')}>
            <Image
              src={imageUrl}
              alt="Category"
              layout="fill"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          </div>
          {/* Note on above -> Images are now lazy loaded with compressed sizes. Layout fill states height and width to 100% and will blur while loading */}
        </div>
      )}

      {overlay && (
        <div
          className={cardContainerCssClasses.join(' ')}
          onClick={(e) =>
            onOverlayClick(e, { cardData, currentText: overlay[0] })
          }
          role="button"
          tabIndex={0}
        >
          {overlay[0] && (
            <h2 dangerouslySetInnerHTML={{ __html: overlay[0] }} />
          )}
          {overlay[1] && <p>{overlay[1]}</p>}
        </div>
      )}

      {footer && (
        <div className={classes.footer}>
          <span className={classes.value1}>{footer.value1}</span>
          <span className={classes.value2}>{footer.value2}</span>
        </div>
      )}
    </div>
  )
}

Card.propTypes = {
  cardData: PropTypes.shape({
    imageUrl: PropTypes.string,
    footer: PropTypes.shape({
      value1: PropTypes.string,
      value2: PropTypes.string,
    }),
    overlayPosition: PropTypes.string,
    showOverlayByDefault: PropTypes.bool,
    onOverlayClick: PropTypes.func,
  }),
  large: PropTypes.bool,
  disableImageTransition: PropTypes.bool,
}

export default Card

// For reference
// RGB blur code sample
/*
  const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

    And then use this prop to the Image component - blurDataURL={rgbDataURL(252, 250, 245)}

*/

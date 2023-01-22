import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from '@mui/material'
import Image from 'next/image'
import makeStyles from '@mui/styles/makeStyles'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  imageListContainer: {
    height: '100%',
    // overflowY: 'scroll',
    width: '100%',
  },
  imageContainer: {
    overflow: 'hidden',
    padding: '28.125% 0',
    position: 'relative',
  },
}))

function CustomImageList({ cards: itemData, cols }) {
  const classes = useStyles()
  const router = useRouter()

  console.log({ itemData })

  const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'))

  let columnCount = 3
  if (smDown) {
    columnCount = 1
  } else if (mdDown) {
    columnCount = 2
  }

  return (
    <div className={classes.imageListContainer}>
      <ImageList
        cols={cols || columnCount}
        // variant="woven" // needs explicit height and width set to the container. Eg: 75vh, 95vw
        sx={{ height: '100%', width: '100%' }}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.id}
            className={classes.imageContainer}
            sx={{
              opacity: 0.95,
              cursor: 'pointer',
              '&:hover': { opacity: 1 },
            }}
          >
            <Image
              className={classes.image}
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <ImageListItemBar
              onClick={() => router.push(`/shop${item.urlRedirect}`)}
              title={item.title}
              subtitle={item.subText}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}
export default CustomImageList

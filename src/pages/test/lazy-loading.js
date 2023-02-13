import { Box, Container, Typography } from '@mui/material'
import Card from 'src/common/components/card/Card'
import theme from 'src/styles/theme'

function LazyLoadingTest() {
  const test = {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    subText: 'Shop Now',
    urlRedirect: '/mens',
    overlay: ['mens', 'Shop Now'],
    overlayPosition: 'middle',
    showOverlayByDefault: true,
  }
  const test2 = {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    subText: 'Shop Now',
    urlRedirect: '/womens',
    overlay: ['womens', 'Shop Now'],
    overlayPosition: 'middle',
    showOverlayByDefault: true,
  }

  console.log({ theme })
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        {[...new Array(24)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </Box>
      <Typography variant="h1">Testing H1 tag</Typography>

      {/* <LazyLoadComponent threshold={600}> */}
      {/* </LazyLoadComponent> */}
      <Card cardData={test} />
      <Card cardData={test2} />
      {/* Next/Image has support for lazy loading by default */}
    </Container>
  )
}

export default LazyLoadingTest

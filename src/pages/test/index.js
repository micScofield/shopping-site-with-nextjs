import { Container, Box } from '@mui/material'
import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import Card from 'src/common/components/card/Card'

function index() {
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
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </Box>

      <LazyLoadComponent threshold={600}>
        <Card cardData={test} />
      </LazyLoadComponent>
      <Card cardData={test2} />
    </Container>
  )
}

export default index

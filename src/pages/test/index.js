import styled from '@emotion/styled'
import { Box, Container, Grid, Paper } from '@mui/material'

function index() {
  console.log(process.env.NEXT_PUBLIC_TEST_KEY)
  return (
    <Container maxWidth={false}>
      <Box sx={{ my: 2 }}>
        {[...new Array(24)]
          .map(
            () =>
              `Tim Berners-Lee, a British scientist, invented the World Wide Web (WWW) in 1989, while working at CERN. The web was originally conceived and developed to meet the demand for automated information-sharing between scientists in universities and institutes around the world.`
          )
          .join('\n')}
      </Box>
      <footer>
        <Box>
          <Grid container direction="column" spacing={3}>
            {[...new Array(3)].map(() => (
              <Grid
                container
                item
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 3, md: 6 }}
              >
                {[...new Array(4)].map(() => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>Item</Item>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Box>
      </footer>
    </Container>
  )
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default index

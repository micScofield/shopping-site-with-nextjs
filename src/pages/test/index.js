import { Box, Container, Grid } from '@mui/material'
import Link from 'src/common/Link'

function index() {
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
        <Grid container justify="center">
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => console.log('Clicked')}
                href="/test/i18n"
                // className={classes.link}
              >
                i18n
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </Container>
  )
}

export default index

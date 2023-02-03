import styled from '@emotion/styled'
import { Box, Container, Grid, Paper } from '@mui/material'

function index() {
  // console.log(process.env.NEXT_PUBLIC_TEST_KEY)
  return (
    <Container maxWidth={false}>
      <Box sx={{ my: 2 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint at
        provident, quo unde odio asperiores eveniet. Accusantium porro quaerat
        aspernatur alias nostrum eum, beatae, aut ad, perferendis quam ipsa
        suscipit dolorum debitis asperiores explicabo ex adipisci ducimus amet
        iusto. Iste, architecto aperiam. Sint, ipsam. Obcaecati ratione, sit
        voluptatum consequatur nobis assumenda alias laborum eius. Alias, iure?
        Ea minus voluptate illum expedita? Commodi architecto consequatur minima
        quam libero recusandae perspiciatis ad, nam placeat nemo rem vel cumque
        quod, vitae exercitationem repellat unde fugit id inventore ipsa magni
        harum! Animi ullam minima ducimus, qui voluptas, voluptates mollitia
        nihil ea dolorem quidem illo tenetur. Ea architecto dolorem, eum commodi
        blanditiis eius deserunt doloribus labore maxime! Minima unde, deserunt
        assumenda qui dicta nihil, aut est tenetur libero inventore
        exercitationem, quam vero iusto adipisci natus vitae. Facere hic quia
        praesentium aliquid fugit. Accusamus illo eum est alias fugit ratione
        cupiditate itaque suscipit aliquam accusantium rerum reiciendis quisquam
        facere dolorum voluptatem ad eius obcaecati sunt repudiandae ut,
        voluptatibus delectus mollitia. Reprehenderit magni aspernatur minus
        nihil debitis a, delectus sed. Obcaecati debitis consequuntur blanditiis
        doloribus. Aspernatur hic explicabo unde quos magnam. Aspernatur
        blanditiis non veritatis consequatur nemo ea, modi ipsam soluta ipsa
        reprehenderit labore unde provident, nihil perferendis qui quaerat quis
        fuga. Commodi dolores nemo impedit sit ex. Corporis necessitatibus
        dignissimos at beatae. Perferendis ad similique error doloribus
        necessitatibus ducimus amet voluptate atque ab deserunt quo, repudiandae
        impedit repellendus quos dolorem reiciendis, minus ipsum. Doloremque
        dolorum, hic totam laboriosam quam, itaque aspernatur, corrupti deserunt
        laborum iusto eos eum fugit recusandae rerum velit molestiae! Laborum
        labore odit perspiciatis vel blanditiis esse? Deleniti debitis soluta
        laboriosam incidunt quisquam harum odio obcaecati hic labore commodi eos
        cupiditate vitae quidem laborum, architecto dicta animi necessitatibus
        dignissimos quam. Ipsa alias, ad dicta voluptatibus temporibus, error
        veniam sapiente debitis unde dignissimos fugit ratione repudiandae.
        Similique quibusdam vero voluptatibus quisquam sunt in facere
        laboriosam, alias ducimus dicta ipsam? Architecto natus distinctio ipsum
        illum accusantium sapiente veniam pariatur eum rem accusamus, laborum
        tempore, nisi maxime fugit harum dolore voluptatem autem eaque explicabo
        obcaecati aut reprehenderit, quidem voluptatibus! Ut quo velit odit.
        Sequi porro quidem repudiandae debitis quod odio explicabo quas culpa
        error! Illum ipsum facere cupiditate sed vero, pariatur officiis rerum.
        Magnam laboriosam iusto molestiae corrupti, sit est beatae aspernatur
        molestias sequi error accusantium rem labore voluptatibus quod! Quod
        nostrum aut neque accusantium, fuga quaerat error quae assumenda velit
        odit veritatis. Quam rerum nemo ipsa, fuga laborum officiis ad dolores
        quae iure obcaecati neque! Quo ratione consequuntur nobis unde aliquam
        illo modi ex impedit, reiciendis esse repellendus? Quidem, est, nisi
        quod nemo praesentium reiciendis officiis qui nesciunt maiores maxime
        laboriosam deserunt magnam distinctio amet rerum. Voluptatum minus
        laboriosam nam odit? Laboriosam natus quidem ea cupiditate, veniam,
        sapiente architecto et enim animi saepe, repellat necessitatibus.
        Expedita provident voluptates quod vel rerum quis cum optio nulla
        aperiam sunt eum hic ratione delectus suscipit adipisci, voluptate quia
        corporis tempora aspernatur accusamus sed. Numquam veniam nisi qui,
        necessitatibus sapiente consequatur quaerat quibusdam velit aliquid et
        commodi possimus accusamus quos.
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

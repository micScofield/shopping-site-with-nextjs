import Test, { getStaticProps } from 'src/pages/test/fake-api'

export default {
  title: 'Pages/Test',
  component: Test,
}

// export const TestPage = (args, { loaded }) => <Test {...args} data={loaded} />
export const TestPage = (args, { loaded: data }) => (
  <Test {...args} data={data} />
)

TestPage.args = { name: 'Sanyam' }

TestPage.loaders = [
  async () => {
    const data = await getStaticProps()

    return data.props
  },
]

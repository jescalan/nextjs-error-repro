import renderToString from 'next-mdx-remote/render-to-string'

export default async function getStaticProps() {
  return {
    props: {
      foo: 'bar',
    },
  }
}

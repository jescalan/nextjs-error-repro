export default async function getStaticProps() {
  console.log('this is bundled on the client side!')

  return { props: { foo: 'bar' } }
}

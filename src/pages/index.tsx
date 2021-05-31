type Props = {
  title: string
}

const bla = 'teste'

export default function Home({ title = 'React Avançado' }: Props) {
  return <h1>{title}</h1>
}

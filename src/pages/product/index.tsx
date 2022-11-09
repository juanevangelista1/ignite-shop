import { useRouter } from 'next/router'

export function Product() {
  const { query } = useRouter()

  return (
    <>
      <h1>Produtos</h1>
    </>
  )
}

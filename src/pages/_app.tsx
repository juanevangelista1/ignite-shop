import type { AppProps } from 'next/app'
import Image from 'next/legacy/image'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/Logo.svg'
import { Container, Header } from '../styles/pages/app'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logoImg} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

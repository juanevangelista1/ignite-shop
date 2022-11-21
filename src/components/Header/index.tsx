import Link from 'next/link'
import { HeaderContainer } from './styles'
import Image from 'next/legacy/image'

import logoImg from '../../assets/logoGoogle.svg'
import { Cart } from '../Cart'
export function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'} prefetch={false}>
        <Image src={logoImg} alt="" height={40} width={40} />
      </Link>
      <Cart />
      <span>Explorer Shop by - Juan</span>
    </HeaderContainer>
  )
}

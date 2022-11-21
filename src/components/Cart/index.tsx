import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { CartButton } from '../CartButton'
import { CartClose, CartContent } from './styles'

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>
          <h2>Carrinho de compras</h2>

          <section>
            <p>Poxa, o seu carrinho está vazio 🥹</p>
          </section>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

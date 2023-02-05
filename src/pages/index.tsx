import Head from 'next/head'
import Image from 'next/image'

import Text from '@/components/Text'
import WalletList from '@/layouts/WalletsList'

export default function Home() {
  return (
    <div>
      <WalletList />

    </div>
  )
}

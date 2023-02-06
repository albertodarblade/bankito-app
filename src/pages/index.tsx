
import Introduction from '@/layouts/Introduction'
import PrivateContent from '@/layouts/PrivateContent'
import WalletList from '@/layouts/WalletsList'

export default function Home() {
  return (
    <PrivateContent>
      <Introduction />
      <WalletList />
    </PrivateContent>
  )
}

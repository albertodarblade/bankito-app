import Text from "@/components/Text";
import WalletItem from "@/layouts/WalletItem";
import { Stack } from "@mui/material";

export default function WalletList() {

  const wallets = [{ id: '1', name: 'betico' }, { id: '2', name: 'Machieli' }, { id: '3', name: 'Miazapato' }, { id: '4', name: 'Noah Lopez' }, { id: '3', name: 'Miashato' }];
  return (
    <section>
      <p>
        <Text weight="bold" size="L">
          Your Wallets
        </Text>
        <Stack direction="row" flexWrap="wrap">

          {wallets.map(wallet => <WalletItem key={wallet.id} {...wallet} />)}
        </Stack>
      </p>

      <p>
        <Text weight="bold" size="L">
          Wallets Shared from others
        </Text>
        <Stack direction="row" flexWrap="wrap">

          {wallets.map(wallet => <WalletItem key={wallet.id} {...wallet} />)}
        </Stack>
      </p>

    </section>
  )
}

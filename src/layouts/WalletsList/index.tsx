import Text from "@/components/Text";
import WalletItem from "@/layouts/WalletItem";
import { useGetWalletsQuery } from "@/store/queries/wallets";
import { Stack } from "@mui/material";

export default function WalletList() {

  const { data: wallets = [] } = useGetWalletsQuery(null);
  return (
    <section>
      <p>
        <Text weight="bold" size="L">
          Your Wallets
        </Text>
      </p>

      <Stack direction="row" flexWrap="wrap">

        {wallets.map(wallet => <WalletItem key={wallet._id} {...wallet} />)}
      </Stack>

      <p>
        <Text weight="bold" size="L">
          Wallets Shared from others
        </Text>
      </p>

      <Stack direction="row" flexWrap="wrap">

        {wallets.map(wallet => <WalletItem key={wallet._id} {...wallet} />)}
      </Stack>

    </section>
  )
}

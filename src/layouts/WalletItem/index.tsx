import Text from "@/components/Text"
import Box from "@mui/material/Box"
import { width } from "@mui/system"

export interface WalleItemProps {
    name: string,
    icon?: string,
    _id: string
}
export default function WalletItem({ _id, name, icon }: WalleItemProps) {


    return <Box sx={{ width: '6rem', height: '6rem', margin: '1rem', background: '#f2f2f2' }} >

        <p>
            <Text> {name} </Text>
        </p>
    </Box>

}
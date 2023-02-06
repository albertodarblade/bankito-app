import Text from "@/components/Text";
import { Button } from "@mui/material";
import { useSession, signOut } from "next-auth/react";

export default function Introduction() {
    const session = useSession();
    console.log(session);

    return <div>
        <Text> 👋 Hola! {session?.data?.user?.name}</Text>
        <Button onClick={() => signOut()}> Logout </Button>
    </div>

} 
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import { ReactNode } from "react";

export default function PrivateContent({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    //TODO move this to loading component
    return <div> Loading...</div>;
  }
  if (session) {
    return <div>{children}</div>;
  } else {
    return (
      <div>
        <p>
          To use Bankito you need to authenticate with your favorite provider
        </p>
        <br />
        <Button variant="contained" onClick={() => signIn()}>
          Login with Google
        </Button>
      </div>
    );
  }
}

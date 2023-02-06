// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";


// This function can be marked `async` if using `await` inside
const secret = process.env.GOOGLE_CLIENT_SECRET;

export async function middleware(req) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie'),
    },
  };

  const session = await getSession({ req: requestForNextAuth });
  if (session) {
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set("email", session.user.email);
    requestHeaders.set("name", session.user.name);
    requestHeaders.set("image", session.user.image);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      }
    });
  }
  req.nextUrl.searchParams.set("from", req.nextUrl.pathname);
  req.nextUrl.pathname = "/api/auth/unauthorized";

  return NextResponse.rewrite(req.nextUrl);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/wallets"],
};

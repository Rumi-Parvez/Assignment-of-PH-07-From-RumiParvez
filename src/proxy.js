import { headers } from "next/headers";
import {  NextResponse } from "next/server";

import { auth } from "@/lib/auth";

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        const signInUrl = new URL("/sign-in", request.url);

    signInUrl.searchParams.set("reason", "login-required");

        return NextResponse.redirect(new URL("/sign-in", request.url));

    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path" , "/category/:path", "/profile"],}
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("auth_token")?.value; // HTTP-only JWT cookie
    
    if (!token) {
        // Redirect unauthenticated users
        return NextResponse.redirect(new URL("/login", request.url));
    }

    
    // If token exists, proceed to the page and set a custom header
    const response = NextResponse.next();
    return response;
}

// Apply the middleware to protected routes
export const config = {
    matcher: ["/",],
};
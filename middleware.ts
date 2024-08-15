// middleware.ts or middleware.js

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Add any custom Clerk middleware options here if needed
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // Exclude /sign-in catch-all route and its children from middleware protection
    '/sign-in(.*)',

    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
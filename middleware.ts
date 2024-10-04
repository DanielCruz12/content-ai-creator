import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  // Define public routes that can be accessed without signing in
  publicRoutes: ['/sign-in', '/sign-up', '/'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/dashboard', '/(api|trpc)(.*)'],
};

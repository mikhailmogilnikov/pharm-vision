import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import { siteConfig } from './src/shared/config/site';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  const { url, nextUrl } = request;
  const origin = nextUrl.origin;

  if (!token) {
    if (url.includes('/promotion')) {
      const promotionPath = url.split('/promotion').splice(1, 1).join('/');
      const promotionId = promotionPath.split('/')[1];
      const currentPath = promotionPath.split(`/${promotionId}`)[1];

      const { publicRoutes } = siteConfig;

      const isPublicRoute = publicRoutes.some((route) => {
        const regex = new RegExp(route);

        console.log(route, currentPath, regex.test(currentPath))

        if (route === '') {
          return currentPath === '';
        }

        return regex.test(currentPath);
      });

      if (!isPublicRoute) {
        return NextResponse.redirect(`${origin}/login?promotion=${promotionId}`);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

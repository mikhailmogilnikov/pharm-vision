import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  const { url, nextUrl } = request;
  const origin = nextUrl.origin;

  if (!token) {
    if (url.includes('/promotion')) {
      const promotionPath = url.split('/promotion').splice(1, 1).join('/');
      const promotionId = promotionPath.split('/')[1];
      const currentPath = promotionPath.split(`/${promotionId}`)[1];

      const PromotionPublicRoutes = ['', '/registration', '/goods'];

      if (!PromotionPublicRoutes.includes(currentPath)) {
        return NextResponse.redirect(`${origin}/login?promotion=${promotionId}`);
      }
    }
  }

  return NextResponse.next();
}

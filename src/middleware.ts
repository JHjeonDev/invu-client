import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(pathname);
  // /invite 경로와 / 경로가 아닌 경우 루트 페이지로 리다이렉트
  if (!pathname.startsWith('/invite') && pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // /invite 경로 또는 / 경로인 경우 요청을 그대로 진행
  return NextResponse.next();
}

// 이 미들웨어가 적용될 경로를 설정
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|fonts|images|lib).*)'
}; 

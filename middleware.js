import { NextResponse } from "next/server";

export async function middleware(req) {
  const path =  req.nextUrl.pathname;
  const publicPath = ["/get-started" ,'/'];  
  const token = req.cookies.get("next-auth.session-token")?.value;
  if (token && publicPath.includes(path)) {
      return NextResponse.redirect(new URL('/c/new', req.url))
  }
  if(!token && !publicPath.includes(path)){
      return NextResponse.redirect(new URL('/', req.url))

  }
}

export const config = {
  matcher: ['/' , '/get-started','/c/:path*'],
};

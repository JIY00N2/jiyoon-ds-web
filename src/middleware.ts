import { NextResponse, NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { cookieName, fallbackLng, languages } from "./i18n/settings";

/**
 * 1. 쿠키에서 언어 설정을 확인합니다.
 * 2. Accept-Language 헤더에서 언어 설정을 확인합니다.
 * 3. 둘 다 없으면 기본 언어를 사용합니다.
 * 4. 지원하지 않는 언어 경로로 요청이 들어오면 적절한 언어 경로로 리디렉션합니다.
 * 5. 리퍼러 헤더에서 언어 정보를 확인하고, 쿠키에 저장합니다.
 */

// acceptLanguage 모듈에 지원하는 언어 목록을 설정
acceptLanguage.languages(languages);

// API 경로와 정적 파일 경로 등을 제외한 모든 경로에 미들웨어가 적용
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  // 특정 경로 (icon, chrome)가 포함된 요청은 미들웨어를 건너 뜀
  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  ) {
    return NextResponse.next();
  }

  // 1. 쿠키에 설정된 언어를 확인하고
  // 2. 없으면 Accept-Language 헤더에서 언어를 가져오며,
  // 3. 이도 없으면 기본 언어(fallbackLng)를 사용
  let lng: string | undefined | null;

  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  }
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  }
  if (!lng) {
    lng = fallbackLng;
  }

  if (!languages.some((lang) => req.nextUrl.pathname.startsWith(`/${lang}`))) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    );
  } else {
    const response = NextResponse.next();
    response.cookies.set(cookieName, req.nextUrl.pathname.split("/")[1]);
    return response;
  }
}

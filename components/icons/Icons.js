const h = React.createElement;

const createIcon = (paths) => (props) => h(
  'svg',
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-8 w-8 text-blue-600",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    ...props
  },
  ...paths.map(pathData => h('path', { strokeLinecap: "round", strokeLinejoin: "round", d: pathData }))
);

export const IconCode = createIcon(["M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"]);
export const IconCloud = createIcon(["M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"]);
export const IconDatabase = createIcon(["M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7a8 8 0 0116 0M12 11v10"]);
export const IconChartBar = createIcon(["M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"]);
export const IconShieldCheck = createIcon(["M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"]);
export const IconDeviceMobile = createIcon(["M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"]);
export const IconCog = createIcon(["M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"]);
export const IconSupport = createIcon(["M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"]);
export const IconMenu = createIcon(["M4 6h16M4 12h16M4 18h16"]);
export const IconX = createIcon(["M6 18L18 6M6 6l12 12"]);
export const IconFacebook = createIcon(["M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"]);
export const IconTwitter = createIcon(["M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"]);
export const IconLinkedIn = createIcon(["M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z", "M2 9h4v12H2z", "M4 6a2 2 0 100-4 2 2 0 000 4z"]);
export const IconCheck = createIcon(["M5 13l4 4L19 7"]);
export const IconDocumentText = createIcon(["M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"]);
export const IconTrendingUp = createIcon(["M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"]);
export const IconWhatsApp = createIcon(["M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.5 1.32 5l-1.4 5.05 5.16-1.37c1.42.82 3.02 1.28 4.7 1.28h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.23 12.13c-.22.22-1.36.67-1.57.77s-.42.1-.73-.05c-1.33-.6-2.22-1.16-3.16-2.31-.22-.27-.44-.54-.64-.84-.2-.3-.42-.64-.33-.94s.33-.55.47-.73c.13-.18.28-.42.42-.6.13-.18.06-.33-.04-.48-.09-.15-.42-1-.58-1.35s-.3-.3-.42-.3h-.4c-.13 0-.3.04-.47.22-.17.18-.65.64-.65 1.55 0 .9.67 1.8 1.53 2.71.22.25 2.13 3.28 5.06 4.46.7.28 1.24.45 1.67.58.64.18 1.2.16 1.62.1.48-.07 1.36-.55 1.55-1.08.19-.53.19-1 .13-1.08-.07-.08-.23-.13-.47-.23z"]);
export const IconLocationMarker = createIcon(["M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"]);
export const IconPhone = createIcon(["M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"]);
export const IconMail = createIcon(["M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"]);

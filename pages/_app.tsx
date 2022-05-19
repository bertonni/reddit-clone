import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

// NEXTAUTH_SECRET=Hv+NrppBrjVVh5V/K2ikV/5Hk0i3gWpVWrIAeMvsKGg=
// NEXTAUTH_URL=http://localhost:3000/api/auth/callback/reddit
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

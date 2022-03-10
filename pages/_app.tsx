import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
   return (
     <div>
       <ul>
         <li>
           <Link href="/news">
             <a>News</a>
           </Link>
         </li>
         <li>
           <Link href="/users">
             <a>Users</a>
           </Link>
         </li>
         <li>
           <Link href="/top">
             <a>Top Users</a>
           </Link>
         </li>
       </ul>
       <Component {...pageProps} />
     </div>
   );
}

export default MyApp

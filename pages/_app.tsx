import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
   return (
     <>
       <header>
         <div className="container">
           <Link href="/">
             <h2 className="title">Rapidashboard</h2>
           </Link>
           <nav>
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
           </nav>
         </div>
       </header>
       <Component {...pageProps} />
     </>
   );
}

export default MyApp

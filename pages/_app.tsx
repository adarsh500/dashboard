import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  //opens the sidebar
  function openNav(): void {
    const nav = document.getElementById("mySidenav");
    if (nav) {
      nav.style.width = "150px";
    }
  }

  //closes the sidebar
  function closeNav(): void {
    const nav = document.getElementById("mySidenav");
    if (nav) {
      nav.style.width = "0";
    }
  }
  return (
    //this is the parent component of the app that houses navbar
    //and the sidebar. It wraps the rest of the components
    <>
      <div
        id="mySidenav"
        className="sidenav"
      >
        <a
          href="#"
          className="closebtn"
          onClick={closeNav}
        >
          &times;
        </a>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/news">
          <a>News</a>
        </Link>
        <Link href="/">
          <a>Logout</a>
        </Link>
      </div>
      <header>
        <div className="container">
          <span
            style={{
              fontSize: "30px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={openNav}
          >
            &#9776;
          </span>
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

export default MyApp;

import React from 'react'
import {Link} from "react-router-dom";



export default function Navbar() {
  return (
    <>
    <nav className="w-[100%] overflow-hidden  relative flex h-[4rem] flex-wrap items-center justify-between bg-neutral-900 py-2 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4 "
        data-te-navbar-ref=""
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          
          <button
            className="block border-0 bg-transparent px-2 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init=""
            data-te-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          
          <div
            className="!visible  hidden flex-grow basis-[100%] items-center lg:mt-[6px] lg:!flex lg:basis-auto lg:items-center"
            id="navbarSupportedContent4"
            data-te-collapse-item=""
          >
         
            <Link className="pr-2 text-2xl font-semibold text-white mb-3" to="/">
              NewsMania
            </Link>
            
            <ul
              className="list-style-none mr-auto flex flex-col  lg:flex-row lg:px-5 mx-7"
              data-te-navbar-nav-ref=""
            >
              <li className="mt-[-10px] lg:mb-0 lg:pr-5" data-te-nav-item-ref="">
                <Link className="text-white  disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  to="/general"
                  data-te-nav-link-ref=""
                >
                  Home
                </Link>
              </li>

            
              <li className="mt-[-10px] lg:mb-0 lg:pr-5" data-te-nav-item-ref="">
                <Link className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                 to="/buissness"
                  data-te-nav-link-ref=""
                >
                  Buissness
                </Link>
              </li>
              <li className="mt-[-10px] lg:mb-0 lg:pr-5" data-te-nav-item-ref="">
                <Link className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                 to="/science"
                  data-te-nav-link-ref=""
                >
                  Science
                </Link>
              </li>
              <li className="mt-[-10px] lg:mb-0 lg:pr-5" data-te-nav-item-ref="">
                <Link className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                 to="/sports"
                  data-te-nav-link-ref=""
                >
                  Sports
                </Link>
              </li>
              <li className="mt-[-10px] lg:mb-0 lg:pr-5" data-te-nav-item-ref="">
                <Link className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                 to="/entertainment"
                  data-te-nav-link-ref=""
                >
                  Entertainment
                </Link>
              </li>
              <li className="mt-[-10px] lg:mb-0 lg:pr-5" data-te-nav-item-ref="">
                <Link className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                 to="/health"
                  data-te-nav-link-ref=""
                >
                  Health
                </Link>
              </li>
              <li className="mt-[-10px] lg:mb-0 lg:pr-5" data-te-nav-item-ref="">
                <Link className="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                 to="/technology"
                  data-te-nav-link-ref=""
                >
                  Technology
                </Link>
              </li>

            </ul>
          </div>

          
        </div>
      </nav>

    </>

  )
}





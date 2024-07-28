'use client'

import useDebounce from "@/hooks/useDebounce";
import Image from "next/image";
import { useState } from "react"
import SearchResult from "./SearchResult";
import { useRouter } from "next/navigation";

const Search = ({docs}) => {

  const [searchResults , setSearchResult] = useState([]);
  const [term, setTerm] = useState("");
  const router = useRouter()

  function handleSearch(e){
    const value = e.target.value;
    setTerm(value)
    doSearch(value)
  }

  function closeSearchResult(e){
    e.preventDefault()
    router.push(e.target.href)
    setTerm("")

  }

  const doSearch = useDebounce((term)=>{
    const found = docs.filter ((doc)=>{
      return doc.title.toLowerCase().includes(term.toLowerCase())
    })
    console.log(found)
    setSearchResult(found)
  },500)

    return (
      <>
      <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
              <button
                type="button"
                className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
              >
                <Image
                alt="search" src="/search.svg" className="h-5 w-5" width={50} height={50}
                />

                <input
                  type="text"
                  value={term}
                  onChange={handleSearch}
                  placeholder="Search..."
                  class="flex-1 focus:border-none focus:outline-none"
                />
              </button>
        </div>
        {term && term.trim().length >0 && (
          <SearchResult results={searchResults} term={term} closeSearchResult={closeSearchResult} />
        )}
        </>
    )
  }
  
  export default Search
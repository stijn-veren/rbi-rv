import { useState } from 'react'
import { BiSearch, BiCaretDown } from 'react-icons/bi'
import DropDown from './DropDown'

const Search = () => {
  let [toggleSort, setToggleSort] = useState(false)

  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-8 leading-tight focus:outline-none"
          type="text"
          name="query"
          id="query"
          value=""
          placeholder="Search"
          aria-label="Search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              type="button"
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => {
                setToggleSort(!toggleSort)
              }}
            >
              Sort By <BiCaretDown className="ml-2" />
            </button>
            <DropDown toggle={toggleSort} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search

import React, {useState, useContext} from 'react'

const SearchContext = React.createContext()
const SearchContextUpdate = React.createContext()

export function useSearch() {
    return useContext(SearchContext)
}

export function useSearchUpdate() {
    return useContext(SearchContextUpdate)
}


export function SearchProvider({children}) {
    const [search, setSearch] = useState('');

    function HandleChange(pValue) {
      setSearch(pValue);
    }
    return (
        <SearchContext.Provider value={search} >
            <SearchContextUpdate.Provider value={HandleChange}>
                {children}
            </SearchContextUpdate.Provider>  
        </SearchContext.Provider>
    )
}

export default SearchContext
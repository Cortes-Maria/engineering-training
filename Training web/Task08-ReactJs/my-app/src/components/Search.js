import React, { useState } from 'react'
import '../styles/Search.scss'
import { useSearchUpdate } from '../SearchContext'

function Search(props) {

    const [searchCompanies,setSearch] = useState('');
    const searchUpdate = useSearchUpdate(); 


    const HandleChange = (e) => {
        setSearch(e.target.value);
        if(e.target.value.length >= 3 || e.target.value==='') {
            searchUpdate(e.target.value); 
        } 
    }

    return (
        <div>
            <div className="search">
                <div className="search__title"> 
                    <b>Los Mejores Agentes de seguridad</b>
                </div> 
                <div className="search__bar">
                    <input className="search__input"
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        placeholder="Buscar por Empresa"
                        value={searchCompanies}
                        onChange = {HandleChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default Search 
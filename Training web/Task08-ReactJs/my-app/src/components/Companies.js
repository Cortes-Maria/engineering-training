import React, { useState, useEffect } from 'react'
import '../styles/Companies.scss'
import { useSearch } from '../SearchContext'

 
function Companies(props) {

  const [error,setError] = useState(null);
  const [isLoaded,setLoaded] = useState(false);
  const [companies,setCompanies] = useState([]);
  const search = useSearch();  
  


  const loadCompanies = () => {
    fetch("https://my-json-server.typicode.com/cortes-maria/Agents/companies")
      .then(res => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setCompanies(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      ) 
  }
  //ComponentDidMount
  useEffect(()=>{
    loadCompanies();
  },[])

  return (  
    error ?
    <div>Error: {error.message}</div>
    :
    !isLoaded ?
    <div>Loading...</div>
    : 
    <div>
        <ul className="companies">
          {companies.map(comp => (
            comp.name.includes(search) || comp.description.includes(search) ?
            <li className="card" key={comp.name}>
                <div className="card__title">
                  <b className="card__name">{comp.name}</b>
                    {
                        comp.isCertified ?
                        <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5681 12.0006C21.5681 17.5582 17.1534 22.0012 11.784 22.0012C6.41464 22.0012 2 17.5582 2 12.0006C2 6.44292 6.41464 2 11.784 2C17.1534 2 21.5681 6.44292 21.5681 12.0006Z" stroke="black" strokeWidth="4"/>
                            <path d="M17.54 6.91306L16.2488 11.7289L18.9381 15.9026L14.0417 16.1402L10.9749 20.0347L9.23988 15.3657L4.65516 13.5989L8.47935 10.4757L8.71265 5.48925L12.8111 8.228L17.54 6.91306Z" fill="black"/>
                            <path d="M16.7257 21.4108L21.6674 14.7104L32 18.6965L25.0375 21.4108L25.2471 29L16.7257 21.4108Z" fill="black"/>
                        </svg>
                        :
                        null
                    }
                </div>
                <hr className="card__line"/>
                <div className="card__description">
                  <img className="card__image" src={comp.image} alt="cardImage"/>
                  <p>{comp.description}</p>
                </div>
                <div className="card__price">
                  <b>Desde: ${comp.rate} / {comp.hours} horas</b>
                  <button className="card__button">Contratar</button>
                </div>
            </li>
            :
            null
            ))}
        </ul>
    </div>   
  );   
}

export default Companies
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryInfo = () => {
    const {name} = useParams()
    const [info, setInfo] = useState([])
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data[0])
                setCurrencies(data[0].currencies[0])
                // console.log(data[0])
            })
            
    }, [])
    // console.log(info?.currencies[0])
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Country Info-App</h1>
            <h3>Name : {name}</h3>
            <h4>Currencies : {currencies.name}({currencies.symbol})</h4>
            <p>Area: {info.area}</p>
            <p>Region: {info.region}</p> 
            <p>Population: {info.population}</p>
            
            <img src={info.flag} width="300px" />
        </div>
    );
};

export default CountryInfo;
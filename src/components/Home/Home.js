import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countryInfo, setCountryInfo] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => {
            setCountryInfo(data)
        })
    }, [])
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Country Details App</h1>
            <div className="row">
                {
                    countryInfo.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;
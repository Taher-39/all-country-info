import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name, region, capital, population} = props.country;
    const history = useHistory();
    const moreInfo = (name) =>{
        history.push(`/country/${name}`)
    }
    const styleCountry = {
        border: '2px solid lightblue',
        margin: "20px",
        padding: '20px',
        borderRadius: "10px",
        textAlign: 'center',
        width: '300px',
        height: '350px'
    }
    return (
        <div className="col-md-3 col-sm-4 col-xm-6">
            <div style={styleCountry}>
                <h2>{name}</h2>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
                <Link to={`/country/${name}`}>More-Info</Link><br/>
                <button  className="btn btn-info" onClick={() => moreInfo(name)} >More Info</button>
            </div>
        </div>
    );
};

export default Country;
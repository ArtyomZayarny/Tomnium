import React, { useState, useEffect } from 'react';
import {Dimmer,Loader, Container} from 'semantic-ui-react'
import data from './data'
import RatesList from './RatesList'
import './App.css';

const App = ()=> {
  const [isFetching, setFetching] = useState(false);
  const [Data,setData] = useState({});
  const [error,setError] = useState(false)

    useEffect( () => {
      setFetching(true);
    const p = new Promise( (resolve,reject) => {
          setTimeout( () => {
            
            const result = data;
            resolve(result)
          },3000);
        });
    p.then( (result)=> {
        setFetching(false);
        if (result) {
          setData(result)
        } else {
            setError(true)
        }
    })
    }, []);
    return (
    <Container>
      <h2>Tomnium</h2>
      <Dimmer active={isFetching === true} inverted>
                                    <Loader>Loading...</Loader>
                                </Dimmer>
      {Object.keys(Data).length > 0 && <RatesList ratesInfo={Data}/> }
    </Container>
    );
}

export default App;

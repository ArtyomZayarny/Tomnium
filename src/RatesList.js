import React from 'react'
import {List} from 'semantic-ui-react'


const RatesList = ({ratesInfo}) => {
    const { base, rates} = {...ratesInfo};
    let ratesArr = [];
    for(let key in rates) {
    ratesArr.push(<li>{key} {rates[key]} {base}</li>)
    }
    return (
        <List>
           { ratesArr.map( rate => rate)}
        </List>
    )
}
export default RatesList
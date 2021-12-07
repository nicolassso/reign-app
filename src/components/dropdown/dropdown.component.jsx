import React, { useState, useContext } from 'react'
import {QueryContext} from '../context/query.context'

import './dropdown.styles.scss'

function Dropdown() {

    const options = [
        {
            id: 1,
            label: 'Angular',
            value: 'angular'
        },
        {
            id: 2,
            label: 'React',
            value: 'reactjs'
        },
        {
            id: 3,
            label: 'Vue',
            value: 'vuejs'
        }
    ];

    const [query, setQuery] = useContext(QueryContext)

    const handleChange = (e) => {
        setQuery(e.target.value)
        return query
    }



    return (

        //ADD FUCKING PHOTO TO THE LEFT... only strings and numbers are supported as option children
        <div className="dropdown">
            <div className="dropdown-inner">
                <select 
                name="dropdown" 
                className="dropdown-box"
                onChange={handleChange}
                >
                    <option value="" disabled selected hidden>Select your news</option>

                    {options.map(option => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}

                </select>
                <span className="custom-arrow"><i className="fas fa-angle-down"></i></span>
            </div>
        </div>
    )
}


export default Dropdown

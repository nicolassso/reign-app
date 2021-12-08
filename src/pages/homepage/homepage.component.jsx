import React from 'react'

import Dropdown from '../../components/dropdown/dropdown.component'
import Rowpreview from '../../components/row-preview/row-preview.component'


import './homepage.styles.scss'


const Homepage = ({news}) => {


    return (
        <div className="homepage">
            <Dropdown />
            <Rowpreview news={news}/>
        </div>
    )
}

export default Homepage

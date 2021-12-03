import React from 'react'
import './favespage.styles.scss'
import Rowpreview from '../../components/row-preview/row-preview.component'

function Favespage(isLiked) {
    console.log({isLiked} + ' is it')
    return (
        <div className="favespage">
            <Rowpreview />
        </div>
    )
}

export default Favespage

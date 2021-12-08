import React from 'react'

import Rowpreview from '../../components/row-preview/row-preview.component'


import './favespage.styles.scss'


function Favespage({news}) {

    return (
        <div className="favespage">
            <Rowpreview news={news} />
        </div>
    )
}

export default Favespage

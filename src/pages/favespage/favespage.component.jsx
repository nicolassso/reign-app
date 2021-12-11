import React, { useContext, useEffect } from 'react'

import Rowpreview from '../../components/row-preview/row-preview.component'
import { LikedContext } from '../../components/context/query.context'


import './favespage.styles.scss'


function Favespage() {

    const [likedRows, setLikedRows] = useContext(LikedContext)

    useEffect(() => {
        
    }, [])

    return (
        <div className="favespage">
            <Rowpreview likedRows={likedRows} />
        </div>
    )
}

export default Favespage

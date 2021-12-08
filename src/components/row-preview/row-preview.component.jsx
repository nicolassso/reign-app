import React from 'react'
import Row from '../row/row.component'
import './row-preview.styles.scss'

import addFaves from '../actions/actions.component'


export const Rowpreview = ({news}) => {

    return(
        <div className="row-preview">
            {news
            //RETURN NEWS WITH TITLE AND URL, THE EIGHT FIRST
            .filter(p => !! p.story_title & !! p.story_url )
            .filter((p, idx) => (
                idx < 8
                ))
            .map(p =>(
                <Row key={p.objectID} id={p.objectID} author={p.author} title={p.story_title} url={p.story_url} created={p.created_at} liked={false} />
            ))}
        </div>
    )
        
    
}

export default Rowpreview
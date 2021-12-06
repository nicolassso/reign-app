import React from 'react'
import './row-preview.styles.scss'
import Row from '../row/row.component'

export const Rowpreview = ({news}) => {
    console.log(news)
    return(
        <div className="row-preview">
            {news
            //RETURN NEWS WITH TITLE AND URL, THE EIGHT FIRST
            .filter(p => !! p.story_title & !! p.story_url )
            .filter((p, idx) => (
                idx < 8
                ))
            .map(p =>(
                <Row key={p.objectID} author={p.author} title={p.story_title} url={p.story_url} created={p.created_at} />
            ))}
        </div>
    )
        
    
}

export default Rowpreview

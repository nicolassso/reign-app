import React from 'react'
import Row from '../row/row.component'
import './row-preview.styles.scss'



export const Rowpreview = ({news, likedRows}) => {

    const currentPathName = window.location.href
    const currentPage = currentPathName.slice(currentPathName.lastIndexOf('/'))    

    return(
        <div className="row-preview">

{/* RENDER ROW COMPONENTS CONDITIONALLY ON THE PAGE WE ARE */}

        {
            (currentPage === '/faves') ?
                likedRows.map(
                    p => (
                        <Row
                        key={p.id}
                        id={p.id}
                        author={p.author}
                        title={p.title}
                        url={p.url}
                        created={p.created}
                        liked={true}

                        />
                    )
                )
            :
            news   
            .filter(p => !! p.story_title & !! p.story_url )
            .filter((p, idx) => (
                idx < 8
                ))
            .map(p =>(
                <Row
                key={p.objectID} 
                id={p.objectID} 
                author={p.author} 
                title={p.story_title} 
                url={p.story_url} 
                created={p.created_at} 
                liked={false} 

                />
            ))
            }
        </div>
    )
        
    
}

export default Rowpreview
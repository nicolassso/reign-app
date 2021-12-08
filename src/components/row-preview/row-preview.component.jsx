import React, { useState } from 'react'
import Row from '../row/row.component'
import './row-preview.styles.scss'


export const Rowpreview = ({news}) => {

    const [likedRows, setLikedRows] = useState([])
    console.log(likedRows)

    //ADD LIKED ROW TO ARRAY OF LIKED ROWS

    const addToFaves = (row) => {
        const existingRow = likedRows.map(
            likedRow => likedRow.id === row.id
        )
    
        if(!existingRow){
            row.liked=true
            return likedRows.push(row)
        }else{
            return(
            (likedRows.length<2)
            ? setLikedRows([])
            : setLikedRows(
                likedRows.filter(likedRow => 
                    likedRow.id!==row.id
                    ))
            )
        }
    }


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
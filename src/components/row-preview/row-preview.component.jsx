import React from 'react'
import './row-preview.styles.scss'
import Row from '../row/row.component'

export const Rowpreview = ({news}) => {

    window.mainInfo = [{}]
    window.keys = ["author", "story_title", "story_url", "created_at"]

    // try{
    //     //pongo un timeout porque la app peta, culpa de la call a la api pero no se por que exactamente, cuando cambio uno de los parametros de la query funciona XD
    //     // setTimeout(() => {
    //     //     news.map(p => (console.log(p.author)))
    //     // }, 1000);
    // }catch(error){
    //     console.log(error)
    // }    
    
    return(
        <div className="row-preview">
            {news.map(p => {
                return(
                <Row key={p.objectID} author={p.author} title={p.story_title} url={p.story_url} created={p.created_at} />
                )
            })}
        </div>
    )
        
    
}

export default Rowpreview

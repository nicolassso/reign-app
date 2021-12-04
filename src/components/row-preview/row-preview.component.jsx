import React from 'react'
import './row-preview.styles.scss'
import Row from '../row/row.component'

export const Rowpreview =({news}) => {

    const mainInfo = []


    for(const {author, story_title, story_url, created_at} of news){
        mainInfo.push(author)
    }
    // console.log(Object.keys(news[1]).length)
     for( let i = 0; i < Object.keys(news[i]).length; i++ ){
         console.log(Object.keys(news[i]))
     }


    
    
    return(
        <div className="row-preview">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    )
        
    
}

export default Rowpreview

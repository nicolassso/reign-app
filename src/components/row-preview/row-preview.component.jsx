import React from 'react'
import './row-preview.styles.scss'
import Row from '../row/row.component'

export const Rowpreview =({news}) => {

    const mainInfo = []
    let arrayKeys = []


    for(const {author, story_title, story_url, created_at} of news){
        mainInfo.push(author)
    }
     for( let i = 0; i < Object.keys(news[i]).length; i++ ){
         arrayKeys = Object.keys(news[i]) 
     }
     console.log(arrayKeys)

     console.log(arrayKeys.filter(key => key === 'author'))


    
    
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

import React, {useState, useEffect, useContext} from 'react'
import './row.styles.scss'

import imgEmptyHeart from '../../assets/images/iconmonstr-favorite-2.png'
import imgLiked from '../../assets/images/iconmonstr-favorite-3.png'
import imgclock from '../../assets/images/iconmonstr-time-2.png'

import { LikedContext } from '../context/query.context'


function Row(props) {

    const {id, author, title, url, created, liked} = props

    //LOCAL STATE CREATING OBJECT FOR EACH NEW WITH DEFAULT VALUE LIKED OF FALSE

    const [rowProps, setRowProps] = useState({
        id: id,
        author: author,
        title: title,
        url: url,
        created: created,
        liked: liked
    })

    //GET THE LIKED ROWS CONTEXT AND DATA FROM LOCAL STORAGE 

    const [likedRows, setLikedRows] = useContext(LikedContext)

    
    const storage = () => {
        const data = localStorage.getItem('liked-rows')
        if(data){
            setLikedRows(JSON.parse(data))
        }
    }

    useEffect(() => {
        storage()
    }, [])
    useEffect(() => {    
        localStorage.setItem('liked-rows', JSON.stringify(likedRows))
    })


    //HANDLE CLICK   

    const isRowLiked = () => {
        if(!rowProps.liked){
            console.log(`you liked this new by ${author}` + likedRows)
            let arr = likedRows.concat(rowProps)
            setLikedRows(arr)
        }else{
            console.log(`you don't like new by ${author}`)
            return(
                (likedRows.length<2)
                ? setLikedRows([])
                : setLikedRows(likedRows.filter(likedRow => 
                    likedRow.id!==rowProps.id
                    ))
                )
        }
    }
    
    const handleClick = () => {
        setRowProps({  
            ...rowProps,           
            liked: !rowProps.liked
        })
        isRowLiked();
    }


    
    //OPEN THE NEW URL IN ANOTHER TAB
    const urlClick = (u) => {
        window.open (u, "_blank")
    }

    return (
        <div className="row">
            <div onClick={() => urlClick(url)} className="row-content">
                <div className="row-date-author">
                    <img src={imgclock} alt="" width='16px'/> 
                    <span>{created} by {author}</span>
                    </div>
                <div className="row-new-content">
                    <span>{title}</span>
                </div>
            </div>
            <div className="row-like">
                <button onClick={handleClick} className='likeButton'>
                        {
                            (!rowProps.liked)
                            ? <img src={imgEmptyHeart} alt="" /> 
                            : <img src={imgLiked} alt="" />
                        }
                </button>
            </div>
        </div>
    )
}

export default Row

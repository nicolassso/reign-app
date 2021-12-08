import React, {useState} from 'react'
import './row.styles.scss'

import imgEmptyHeart from '../../assets/images/iconmonstr-favorite-2.png'
import imgLiked from '../../assets/images/iconmonstr-favorite-3.png'
import imgclock from '../../assets/images/iconmonstr-time-2.png'

import {addFaves} from '../actions/actions.component'


function Row(props) {

    const {id, author, title, url, created} = props

    //LOCAL STATE
    const [isLiked, setisLiked] = useState(false);

    const [rowProps, setRowProps] = useState({
        id: id,
        author: author,
        title: title,
        url: url,
        created: created,
        liked: isLiked
    })


    //HANDLE CLICK
    const handleClick = () => {
        setisLiked(!isLiked)
        setRowProps({
            ...rowProps,
            liked: !isLiked
        })
        addFaves(rowProps)
    }

    //WHEN POST IS LIKED
    const likedPost = (c) => {
        !!c && console.log(`liked and writen by ${author}`)
    }
    likedPost(isLiked)

    
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
                <button onClick={() => handleClick()} className='likeButton'>
                        {
                            (isLiked===false)
                            ? <img src={imgEmptyHeart} alt="" /> 
                            : <img src={imgLiked} alt="" />
                        }
                </button>
            </div>
        </div>
    )
}

export default Row

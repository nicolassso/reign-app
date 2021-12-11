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

    //RENDER LIKED HEART WHEN NEW FOUND IN LOCAL STORAGE
    const storage = () => {
        const data = localStorage.getItem('liked-rows')
        if(data){
            setLikedRows(JSON.parse(data))

            likedRows.map(likedRow => 
                (likedRow.id === rowProps.id) 
                ? setRowProps({
                    ...likedRow,
                    liked:true
                })
                : ''
                )
        }
    }

    useEffect(() => {
        storage()
    }, [])
    useEffect(() => {    
        localStorage.setItem('liked-rows', JSON.stringify(likedRows))
    })


    //HANDLE CLICK    

    const handleClick = () => {
        setRowProps({  
            ...rowProps,           
            liked: !rowProps.liked
        })
        isRowLiked()
    }

    const isRowLiked = () => {
        if(!rowProps.liked){
            let arr = likedRows.concat(rowProps)
            setLikedRows(arr)
        }else{
            return(
                (likedRows.length<2)
                ? setLikedRows([])
                : setLikedRows(likedRows.filter(likedRow => 
                    likedRow.id!==rowProps.id
                    ))
                )
        }
    }
    
    //OPEN THE NEW URL IN ANOTHER TAB
    const urlClick = (u) => {
        window.open (u, "_blank")
    }

    
    //GET DIFFERENCE IN MILLISECONDS, THEN MINUTES, HOURS AND DAYS
    const today = new Date()
    const newDate = new Date(created)
    const rest = Math.abs(today-newDate)

    const [minutes, setMinutes] = useState(Math.round(rest / (1000*60)))
    const [hours, setHours] = useState(Math.round(minutes/60))
    const [days, setDays] = useState(Math.round(hours/24))

    //FUNCTION TO DISPLAY TIME ACCORDING TO DISTANCE IN TIME

    const timePosted = () => {

        if(minutes<60){
            return (minutes + ' min ago')
        }
        if(hours<24){
            console.log('hours')
            return (hours + ' hs ago')
        }
        if(minutes>1440){
            console.log('days')
            return (days + ' days ago')
        }

    }


    return (
        <div className="row">
            <div onClick={() => urlClick(url)} className="row-content">
                <div className="row-date-author">
                    <img src={imgclock} alt="" width='16px'/> 
                    <span>{timePosted()} by {author}</span>
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

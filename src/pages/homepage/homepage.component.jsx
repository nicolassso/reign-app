import React, {useState, useEffect} from 'react'

import './homepage.styles.scss'

import Dropdown from '../../components/dropdown/dropdown.component'
import Rowpreview from '../../components/row-preview/row-preview.component'

import apiCall from '../../components/apicall/apiCall'



const Homepage = () => {

    let [news, setNews] = useState([])
    let [currentPage, setCurrentPage] = useState(1)
    let [currentQuery, setCurrentQuery] = useState('')
    let [postsPerPage] = useState(8)
    let [title, setTitle] = useState('')



    useEffect(() => {
        const fetchData = async (e) => {

            await apiCall.getData()
            .then(
                res => {
                    setNews(res.data.hits)
                }
            ).catch((error) => {
                console.log(error)
            })
    
        }
        fetchData();
    }, [])

    



    return (
        <div className="homepage">
            <Dropdown />
            <Rowpreview news={news}/>
        </div>
    )
}

export default Homepage

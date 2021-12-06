import React, {useState, useEffect, useContext} from 'react'

import './homepage.styles.scss'

import Dropdown from '../../components/dropdown/dropdown.component'
import Rowpreview from '../../components/row-preview/row-preview.component'

import apiCall from '../../components/apicall/apiCall'
import { QueryContext } from '../../components/context/query.context'



const Homepage = () => {

    let [news, setNews] = useState([])
    // let [currentPage, setCurrentPage] = useState(1)
    // let [currentQuery, setCurrentQuery] = useState('')

    const query = useContext(QueryContext);
    const p = '0'

    useEffect(() => {
        const fetchData = async (e) => {

            await apiCall.getData(query, p)
            .then(
                res => {
                    setNews(res.data.hits)
                }
            ).catch((error) => {
                console.log(error)
            })
    
        }
        fetchData();
    }, [query, p]) 

    return (
        <div className="homepage">
            <Dropdown />
            <Rowpreview news={news}/>
        </div>
    )
}

export default Homepage

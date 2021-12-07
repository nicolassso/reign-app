import React, {useState, useEffect, useContext} from 'react'

import Dropdown from '../../components/dropdown/dropdown.component'
import Rowpreview from '../../components/row-preview/row-preview.component'

import apiCall from '../../components/apicall/apiCall'
import { QueryContext } from '../../components/context/query.context'
import { PageContext } from '../../components/context/query.context'

import './homepage.styles.scss'




const Homepage = () => {

    let [news, setNews] = useState([])
    const [query, setQuery] = useContext(QueryContext)
    const [page, setPage] = useContext(PageContext)

    console.log(` ${query} ${page} `)

    useEffect(() => {
        const fetchData = async (e) => {

            await apiCall.getData(query, page)
            .then(
                res => {
                    setNews(res.data.hits)
                }
            ).catch((error) => {
                console.log(error)
            })
    
        }
        fetchData();
    }, [query, page]) 

    return (
        <div className="homepage">
            <Dropdown />
            <Rowpreview news={news}/>
        </div>
    )
}

export default Homepage

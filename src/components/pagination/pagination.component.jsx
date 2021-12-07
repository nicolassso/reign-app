import React, {useContext} from 'react'
import { PageContext } from '../context/query.context'
import './pagination.styles.scss'

function Pagination() {

    //SET THE VARIABLES FOR THE PAGES

    const [page, setPage] = useContext(PageContext)
    const pages = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    //FUNCTIONS FOR THE LEFT AND RIGHT ARROW

    const leftArrow = () => {
        if (page > 0){
            setPage((pages.indexOf(page.toString())-1))
        } else{
            setPage('9')
        }
    }

    const rightArrow = () => {
        if (page < 9){
            setPage((pages.indexOf(page.toString())+1))
        } else{
            setPage('0')
        }
    }

    return (
        <div className="pagination">
            <div className="pagination-item"
            onClick={()=>leftArrow()}
            >
                <span><i className="fas fa-angle-left"></i></span>
            </div>

            {
                pages.map(p => (
                    <div 
                    key={p}
                    className="pagination-item"
                    onClick={()=>{setPage(Object.values(p))}}
                    ><span>{p}</span></div>
                ))
            }

            <div className="pagination-item"
            onClick={()=>rightArrow()}
            ><span><i className="fas fa-angle-right"></i></span></div>
        </div>
    )
}

export default Pagination

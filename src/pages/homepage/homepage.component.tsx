import './homepage.styles.scss'

import Dropdown from '../../components/dropdown/dropdown.component'
import Rowpreview from '../../components/row-preview/row-preview.component'

function Homepage() {
    return (
        <div className="homepage">
            <Dropdown />
            <Rowpreview />
        </div>
    )
}

export default Homepage

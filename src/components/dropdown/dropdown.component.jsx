import React from 'react'
import './dropdown.styles.scss'



// import AngularLogo from '../../assets/images/image-138.png'
// import ReactLogo from '../../assets/images/image-140.png'
// import VueLogo from '../../assets/images/image-141.png'

function Dropdown() {
    return (

        //ADD FUCKING PHOTO TO THE LEFT... only strings and numbers are supported as option children

        <div className="dropdown">
            <select name="box" defaultValue="Select News" id="" className="dropdown-box">
                <option value="Angular" className="angular"> Angular </option>
                <option value="React" className="react"> React </option>
                <option value="Vue" className="vue"> Vue </option>
            </select>
        </div>
    )
}

export default Dropdown

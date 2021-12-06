import React, { useState } from 'react'

import './dropdown.styles.scss'



// import AngularLogo from '../../assets/images/image-138.png'
// import ReactLogo from '../../assets/images/image-140.png'
// import VueLogo from '../../assets/images/image-141.png'

function Dropdown() {


    const options = [
        {
            id: 1,
            label: 'Angular',
            value: 'angular'
        },
        {
            id: 2,
            label: 'React',
            value: 'reactjs'
        },
        {
            id: 3,
            label: 'Vue',
            value: 'vuejs'
        }
    ];

    const [selected, setSelected] = useState('')

    const handleChange = (e) => {
        setSelected(e.target.value)
        return selected
    }
    

    return (

        //ADD FUCKING PHOTO TO THE LEFT... only strings and numbers are supported as option children
        <div className="dropdown">
            <div className="dropdown-inner">
                <select 
                name="dropdown" 
                className="dropdown-box"
                onChange={handleChange}
                >
                    <option value="" disabled selected hidden>Select your news</option>

                    {options.map(option => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}

                </select>
                <span className="custom-arrow"><i className="fas fa-angle-down"></i></span>
            </div>
        </div>
    )
}

export default Dropdown

import './dropdown.styles.scss'



// import AngularLogo from '../../assets/images/image-138.png'
// import ReactLogo from '../../assets/images/image-140.png'
// import VueLogo from '../../assets/images/image-141.png'

function Dropdown() {
    return (

        //ADD FUCKING PHOTO TO THE LEFT... only strings and numbers are supported as option children

        <div className="dropdown">
            <div className="dropdown-inner">
                <select name="box" defaultValue="default" id="" className="dropdown-box">
                    <option disabled id="default"> Select your news </option>
                    <option value="Angular" className="option angular"> Angular </option>
                    <option value="React" className="option react"> React </option>
                    <option value="Vue" className="option vue"> Vue </option>
                </select>
                <span className="custom-arrow"><i className="fas fa-angle-down"></i></span>
            </div>
        </div>
    )
}

export default Dropdown

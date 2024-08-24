import React from 'react';
import PropTypes from 'prop-types'
import './Navbar.css';
// import {Link} from 'react-router-dom';

function Navbar(props){
      return (
        <>     
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{color:props.textColor}}>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:props.textColor}}>Home</a>
              </li>
              <li className="nav-item">
                {/* <a href="#" className="nav-link active" aria-current="page" style={{color:props.textColor}}>{props.aboutText}</a> */}
              </li>
            </ul>
            <div className="colorPalletteContainer">
              <div className="colorPallette" id="colorPallette1" onClick={props.darkGreen}></div>
              <div className="colorPallette" id="colorPallette2" onClick={props.darkOrchid}></div>
              <div className="colorPallette" id="colorPallette3" onClick={props.darkOrange}></div>
            </div>
            <div class={`form-check form-switch text-${props.textColor}`}>
             <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toToggle}/>
              <label className="form-check-label" htmFor="flexSwitchCheckDefault" >{props.btnText}</label>
           </div>
          </div>
        </div>
      </nav>
      </>
    );
}

Navbar.propTypes={
       title: PropTypes.string.isRequired,
       aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: 'set title here',
    aboutText:'about'
}

export default Navbar;
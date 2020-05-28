import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import './drawerToggle.css'

const DrawerToogle = props => (
    <button className="toggle-button" onClick={props.click}>
        <FontAwesomeIcon icon={faBars}/> 
    </button>
)

export default DrawerToogle 
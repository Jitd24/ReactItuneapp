import React from 'react'
import "../css/loader.css"

const Spinner = () => (
    <div className="loader-container">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
)

export default Spinner;
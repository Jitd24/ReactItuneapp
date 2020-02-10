import React from 'react'
import '../css/form.css'
import Spinner from './Spinner'


    const Form = ({artistname,handlesubmit,isFetching}) => (
      <div className="form">
            <h2>Welcome to Itunes</h2>
        
              <input data-testid="input" className="details" type="text" placeholder="Enter Artist name"  onChange={artistname}></input>
          <br/>
          <br/>
              <button data-testid="button" className="btn" type="submit" onClick={handlesubmit}>Show Record</button>
            
              {isFetching && <Spinner isFetching={isFetching}/>}
        </div>
    )




export default Form;
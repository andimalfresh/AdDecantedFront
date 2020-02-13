import React from 'react'

const ExportDefault = (props) => {
    return(
        <div className="columns">
            <div className="column">{props.customerReturn.map((users) => <div>{users.email}</div>)}</div>
            <div className="column">{props.customerReturn.map((users) => <div>{users.phone}</div>)}</div>  
        </div>
    ) 
} 

export default ExportDefault
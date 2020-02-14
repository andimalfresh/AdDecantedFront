import React from 'react'

const ExportDefault = (props) => {
    return(
        <div className="columns">
            <div className="column">{props.customerReturn.map((users) => <div key={users.id}>{users.email}</div>)}</div>
            <div className="column">{props.customerReturn.map((users) => <div key={users.id}>{users.phone}</div>)}</div>  
        </div>
    ) 
} 

export default ExportDefault
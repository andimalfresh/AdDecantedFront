import React from 'react'

const ExportDefault = (props) => {
    return(
        <div>
            {props.customerReturn.map((users) => <div>{users.email}</div>)}
            {props.customerReturn.map((users) => <div>{users.phone}</div>)}
            
        </div>
    ) 
} 

export default ExportDefault
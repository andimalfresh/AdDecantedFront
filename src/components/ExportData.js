import React from 'react'
import CsvDownloader from 'react-csv-downloader'


const ExportDefault = (props) => {
    const columns = [{
        id: 'cell1',
        displayName: 'FirstName'
      }, {
        id: 'cell2',
        displayName: 'Email'
      },{
        id: 'cell3',
        displayName: 'Phone'
      }
    ];

    const datas = props.customerReturn.map((obj) => ({ "cell1": obj.name, "cell2": obj.email, "cell3": obj.phone}), {});

      
    //   datas.push(props.customerReturn.map((obj) => ({ "cell1": obj.name, "cell2": obj.email, "cell3": obj.phone}), {}))
      console.log(datas)

    return(
        <div className="exportButton">
        {/* <div className="columns">
            <div className="column">{props.customerReturn.map((users) => <div key={users.id}>{users.email},</div>)}</div> 
        </div>
        <div className="columns">
            <div className="column">{props.customerReturn.map((users) => <div key={users.id}>{users.phone},</div>)}</div> 
        </div> */}
        <CsvDownloader
        filename="myfile"
        separator=","
        wrapColumnChar=""
        columns={columns}
        datas={datas}
        text="DOWNLOAD" />
        </div>
    ) 
} 

export default ExportDefault
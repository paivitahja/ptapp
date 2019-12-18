import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'; 
import moment from 'moment';


export default function Traininglist () {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
    .then(response => response.json())
    .then(data => setTrainings(data))
    .catch(err => console.error(err))
  }

  const columns = [
    {
      Header: 'Activity',
      accessor: 'activity'
    },
    {
      Header: 'Date',
      accessor: 'date',
      Cell: row => moment(row.value).format('D.M.YYYY, H:HH')
    },
    {
      Header: 'Duration (min)',
      accessor: 'duration'
    },
    {
      Header: 'Customer',
      accessor: 'customer',
      Cell: row => <div>{row.row.customer.firstname} {row.row.customer.lastname}</div>
    }
  ]

  return (
    <div>
      <ReactTable defaultPageSize={10} filterable={true} data={trainings} columns={columns} />
    </div>
  )
}
 
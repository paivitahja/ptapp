import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Addtraining from './Addtraining';

export default function Customerlist () {
  const [customers, setCustomers] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => setCustomers(data.content))
    .catch(err => console.error(err))
  }

  const saveCustomer = (customer) => {
    fetch('https://customerrest.herokuapp.com/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
  }

  const updateCustomer = (customer, link) => {
    fetch(link, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)      
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
  }

  const deleteCustomer = (link) => {
    if (window.confirm('Are you sure?')) {
      fetch(link, {method: 'DELETE'})
      .then(res => fetchData())
      .catch(err => console.error(err))
    }
  }

  const saveTraining = (training) => {
    fetch('https://customerrest.herokuapp.com/api/trainings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(training)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
  }

  const columns = [
    {
      sortable: false,
      filterable: false,
      width: 150,
      Cell: row => <Addtraining saveTraining={saveTraining} customer={row.original} />
    },
    {
      Header: 'First name',
      accessor: 'firstname'
    },
    {
      Header: 'Last name',
      accessor: 'lastname'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Phone',
      accessor: 'phone'
    },
    {
      Header: 'Address',
      accessor: 'streetaddress'
    },
    {
      Header: 'Postcode',
      accessor: 'postcode'
    },
    {
      Header: 'City',
      accessor: 'city'
    },
    {
      sortable: false,
      filterable: false,
      width: 100,
      Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original} />
    },
    {
      sortable: false,
      filterable: false,
      width: 120,
      accessor: 'links[0].href',
      Cell: row => <Button size="small" variant="outlined" color="secondary"
        onClick={() => deleteCustomer(row.value)} startIcon={<DeleteIcon />}>
          Delete
      </Button>
    }
  ]

  return (
    <div>
      <Addcustomer saveCustomer={saveCustomer} />
      <ReactTable defaultPageSize={10} filterable={true} data={customers} columns={columns} />
    </div>
  )
}
 
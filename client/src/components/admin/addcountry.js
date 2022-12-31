import React, { useEffect } from 'react'
import LoginNav from '../LoginNav'
import AdminDrop from './dropDown';
import AddCountryMod from './countryModal';

// React Bootstrap
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

// Fetching Data
import { useMutation, useQuery } from 'react-query';
import { API } from '../../config/api';


// Styling
const container = {
  display: "flex",
  justifyContent: "center"
}

const countryWrapper = {
  width: "1200px",
  height: "90vh"
}

const header = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "60px"
}

const body = {
  marginTop: "20px"
}

const countryStyle = {
  fontWeight: "800",
  fontSize: "22px",
  backgroundColor: "white",
  marginBottom: "15px",
  height: "40px",
  textAlign: "center"
}

export default function AddCountry() {

  let {data: countries, refetch} = useQuery('countryCache', async () => {
    const response = await API.get('/countries')
    return response.data.data
  })
  
  return (
    <>
      <LoginNav Drop={AdminDrop}/>
      <div style={container}>

        <div style={countryWrapper}>
          <div style={header}>
            <h3 style={{
              fontWeight: "800"
            }}>
              Add New Country
            </h3>
            <AddCountryMod />
          </div>

          <div style={body}>

          <Table striped bordered style={{
            border: "1px solid black"
          }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Country</th>
              </tr>
            </thead>
            {
              countries?.map(country => (
                <tbody key={country?.id}>
                  <tr>
                    <td>{country?.id}</td>
                    <td style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}>{country?.name}</td>
                  </tr>
                </tbody>
              ))
            }
          </Table>

          </div>
        </div>

      </div>
    </>
  )
}

{/* <p style={{
                      marginRight: "15px", 
                      fontWeight: "800", 
                      color: "red",
                      cursor: "pointer"
                      }}>X</p> */}

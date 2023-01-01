import Form from 'react-bootstrap/Form';
import LoginNav from "../LoginNav"
import AdminDrop from "./dropDown"
import Footer from '../footer';

// Addtrip Config
import { useMutation } from "react-query"
import { API } from "../../config/api"
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

// Styling
const test = [
  {
    width: "100px",
    position: "absolute",
    top: "1408px",
    left: "1249px"
  },

  {
    position: "absolute",
    top: "500px",
    right: "1240px"
  }
]

const container = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "100px"
}

const addTripWrapper = {
  width: "1225px",
  marginTop: "80px"
}

const formWrap = {
  padding: "0 20px",
  marginTop: "30px"
}

// Form Styling
const font = {
  fontSize: "20px",
  fontWeight: "800"
}

const formControl = {
  background: "#d3d3d3",
  border: "2px solid #B1B1B1"
}

let admin = '/income-transaction'

const AddTrip = () => {

  const navigate = useNavigate()

  let {data: country} = useQuery('countryCache', async () => {
    const response = await API.get('/countries')
    return response.data.data
  })

  const [form, setForm] = useState({
    title: "",
    accomodation: "",
    transportation: "",
    countryid: "",
    eat: "",
    day: "",
    night: "",
    date: "",
    price: "",
    quota: "",
    description: "",
    image: ""
  })
  console.log(form);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({
        ...form,
        [e.target.name]: e.target.files[0],
      })
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      const formData = new FormData()

      formData.append('title', form.title)
      formData.append('accomodation', form.accomodation)
      formData.append('transportation', form.transportation)
      formData.append('countryid', form.countryid)
      formData.append('eat', form.eat)
      formData.append('day', form.day)
      formData.append('night', form.night)
      formData.append('date', form.date)
      formData.append('quota', form.quota)
      formData.append('price', form.price)
      formData.append('description', form.description)
      formData.append('image', form.image)

      // Memasukkan data user ke Database
      const response = await API.post('/trip', formData)
      navigate('/income-trips')
    } catch (err) {
      console.log(err)
    }
  })

  return (
    <>
      <LoginNav test={test} Drop={AdminDrop} admin={admin}/>
      <div style={container}>
        <div style={addTripWrapper}>
          <h2 style={{fontWeight: "800", fontSize: "34px"}}>Add Trip</h2>

          <div style={formWrap}>
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Title Trip</Form.Label>
              <Form.Control style={formControl} type="text" name='title' onChange={handleChange} value={form.titleTrip}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={font}>Country</Form.Label>
              <Form.Select style={formControl} name='countryid' onChange={handleChange}>
                {
                  country?.map((country) => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  ))
                }
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Accommodation</Form.Label>
              <Form.Control style={formControl} type="text" name='accomodation' onChange={handleChange} value={form.accomodation}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Transportation</Form.Label>
              <Form.Control style={formControl} type="text" name='transportation' onChange={handleChange} value={form.transportation}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Eat</Form.Label>
              <Form.Control style={formControl} type="text" name='eat' onChange={handleChange} value={form.eat}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Duration</Form.Label>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{width: "500px", display: "flex"}}>
                  <Form.Control style={formControl} type="text" name='day' onChange={handleChange} value={form.day}/>
                  <Form.Label style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    margin: 0
                  }}><p style={{
                    margin: "0 0 0 10px",
                    position: "relative",
                    top: "6px"
                  }}>Day</p></Form.Label>
                </div>
                <div style={{width: "500px", display: "flex", marginRight: "50px"}}>
                  <Form.Control style={formControl} type="text" name='night' onChange={handleChange} value={form.night}/>
                  <Form.Label style={{
                      fontSize: "20px",
                      fontWeight: "800",
                      margin: 0
                  }}><p style={{
                    margin: "0 0 0 10px",
                    position: "relative",
                    top: "6px"
                  }}>Night</p></Form.Label>
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Date Trip</Form.Label>
              <Form.Control style={formControl} type="text" name='date' onChange={handleChange} value={form.datetrip}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Price</Form.Label>
              <Form.Control style={formControl} type="text" name='price' onChange={handleChange} value={form.price}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Quota</Form.Label>
              <Form.Control style={formControl} type="text" name='quota' onChange={handleChange} value={form.quota}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={font}>Description</Form.Label>
              <Form.Control style={formControl} as="textarea" rows={3} name='description' onChange={handleChange} value={form.description}/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label style={font}>Image</Form.Label>
              <Form.Control type="file" name='image' style={{
                  background: "#d3d3d3",
                  border: "2px solid #B1B1B1",
                  width: "300px"
              }} onChange={handleChange}/>
            </Form.Group>

            <div style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center"
            }}>
              <button style={{
                width: "250px",
                height: "40px",
                background: "#FFAF00",
                color: "white",
                fontSize: "18px",
                fontWeight: "800",
                border: "1px solid #FFAF00",
                borderRadius: "5px"
              }} type="submit" >Add trip</button>
            </div>
          </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddTrip;
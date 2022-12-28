import Form from 'react-bootstrap/Form';
import LoginNav from "../LoginNav"
import AdminDrop from "./dropDown"
import Footer from '../footer';
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

const AddTrip = ({form, setForm, setArray, oldArray}) => {

  const navigate = useNavigate()
  const {title, country, price} = form

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setForm([...oldArray, {title, country, price, image: ''}])
    console.log("Data Saved")
  }

  const handleClickButton = () => {
    if(!form.accomodation || !form.country || !form.dateTrip || !form.day || !form.description || !form.eat || !form.night || !form.price || !form.quota || !form.title|| !form.transportation){
      alert('Fill all the field!!!')
    } else {
      navigate('/income-trip')
    }
  }


  return (
    <>
      <LoginNav test={test} Drop={AdminDrop} admin={admin}/>
      <div style={container}>
        <div style={addTripWrapper}>
          <h2 style={{fontWeight: "800", fontSize: "34px"}}>Add Trip</h2>

          <div style={formWrap}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Title Trip</Form.Label>
              <Form.Control style={formControl} type="text" name='title' onChange={handleOnChange} value={form.titleTrip}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={font}>Country</Form.Label>
              <Form.Select style={formControl} name='country' onChange={handleOnChange} value={form.country}>
                <option value="indonesia">Indonesia</option>
                <option value="japan">Japan</option>
                <option value="australia">Australia</option>
                <option value="south korea">South Korea</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Accommodation</Form.Label>
              <Form.Control style={formControl} type="text" name='accomodation' onChange={handleOnChange} value={form.accomodation}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Transportation</Form.Label>
              <Form.Control style={formControl} type="text" name='transportation' onChange={handleOnChange} value={form.transportation}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Eat</Form.Label>
              <Form.Control style={formControl} type="text" name='eat' onChange={handleOnChange} value={form.eat}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Duration</Form.Label>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{width: "500px", display: "flex"}}>
                  <Form.Control style={formControl} type="text" name='day' onChange={handleOnChange} value={form.day}/>
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
                  <Form.Control style={formControl} type="text" name='night' onChange={handleOnChange} value={form.night}/>
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
              <Form.Control style={formControl} type="date" name='dateTrip' onChange={handleOnChange} value={form.dateTrip}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Price</Form.Label>
              <Form.Control style={formControl} type="text" name='price' onChange={handleOnChange} value={form.price}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={font}>Quota</Form.Label>
              <Form.Control style={formControl} type="text" name='quota' onChange={handleOnChange} value={form.quota}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={font}>Description</Form.Label>
              <Form.Control style={formControl} as="textarea" rows={3} name='description' onChange={handleOnChange} value={form.description}/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label style={font}>Image</Form.Label>
              <Form.Control type="file" name='image' value={form.image} style={{
                  background: "#d3d3d3",
                  border: "2px solid #B1B1B1",
                  width: "300px"
              }} />
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
              }} type="submit" onClick={handleClickButton}>Add trip</button>
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
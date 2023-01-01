import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from 'react-query';
import { API } from '../../config/api';
import { useQuery } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';

// export const UpdateCountry = ({ countryid, refetch }) => {
//   console.log(countryid);
//   // Update Data
//   const [countryUpdate, setCountryUpdate] = useState({
//     name: ""
//   })

//   const handelChange = (e) => {
//     setCountry({
//       ...\count,
//       [e.target.name]: e.target.value
//     })
//   }

//   let {data: country} = useQuery('updateCountryCache', async () => {
//     const response = await API.get('/countries')
//     return response.data.data
//   })
//   console.log();

//   useEffect(() => {
//     if(country) {
//       setCountryUpdate({name: country})
//     }
//   }, [country])

//   const handleSubmit = useMutation(async (e) => {
//     try {
//       e.preventDefault()

//       const config = {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }

//       const body = JSON.stringify(country)

//       const response = await API.patch(`/country/${countryid}`, body, config)
//       if (response.status === 200) {
//         refetch()
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   })

//   // ============================

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button onClick={handleShow} style={{ fontWeight: "800", color: "white", background: "#FFAF00", border: "1px solid #FFAF00" }}>
//         Update
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Form onSubmit={(e) => handleSubmit.mutate(e)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Input Country Name</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label>Country Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="country"
//                   name="name"
//                   autoFocus
//                 />
//               </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button 
//             style={{
//               background: "#FFAF00",
//               border: "1px solid #FFAF00", 
//               fontWeight: "800", 
//               color: "white"}}
//               type="submit"
//               onClick={handleClose}
//               >
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </>
//   );
// }

function AddCountryMod({refetch}) {

  const [country, setCountry] = useState({
    name: ""
  })

  const handelChange = (e) => {
    setCountry({
      ...country,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // Mengkonfigurasi tipe konten
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(country)

      // Memasukkan data user ke Database
      const response = await API.post('/country', body, config)
      if ( response.status === 200){
        refetch()
      }
    } catch (err) {
      console.log(err)
    }
  })


  // =======================

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{background: "#FFAF00", border: "1px solid #FFAF00", fontWeight: "800", color: "white"}} onClick={handleShow}>
        Add Country
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={e => handleSubmit.mutate(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Input Country Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Country Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="country"
                  name="name"
                  autoFocus
                  onChange={handelChange}
                />
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button 
            style={{
              background: "#FFAF00",
              border: "1px solid #FFAF00", 
              fontWeight: "800", 
              color: "white"}}
              type="submit"
              onClick={handleClose}
              >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddCountryMod;
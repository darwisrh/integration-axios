import './adminModal.css'
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { HeaderPayment, MiddlePayment, EndPayment } from '../payment';
import Search from '../admin/images/search.png'

// Icon
import Booking from './images/book.png'

// Styling
const endPayment = [

  // .more-bottom
  {
    display: "flex",
    justifyContent: "end",
    marginRight: "75px"
  },

  // .more-bottom p:first-child
  {
    width: "165px",
    marginBottom: "0",
    fontSize: "18px",
    fontWeight: "800",
  },

  // .more-bottom p:last-child
  {
    width: "165px",
    marginBottom: "0",
    fontSize: "18px",
    fontWeight: "800",
    color: "#FF0000"
  },

  {
    marginLeft: "35px"
  }


]

const buttonA = {
  background: "#FF0000",
  color: "white",
  fontWeight: "800",
  width: "120px",
  height: "40px",
  border: "1px solid #FF0000",
  borderRadius: "5px"
}

const buttonB = {
  background: "green",
  color: "white",
  fontWeight: "800",
  width: "120px",
  border: "1px solid green",
  borderRadius: "5px",
  marginLeft: "20px"
}

function AdminModal({
  titleTrip, 
  countryN, 
  tripDay, 
  tripNight, 
  dateTrip, 
  accomodation, 
  transport,
  status,
  fullname,
  phone,
  price,
  qtycounter
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div onClick={() => setShow(true)} style={{cursor: "pointer"}}>
        <img src={Search} alt="search" />
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        contentClassName='modalContent'
        aria-labelledby="example-custom-modal-styling-title"
      >
          <Modal.Body>
            <HeaderPayment />
            <MiddlePayment 
            booking={Booking} 
            getCountry={countryN} 
            getTitle={titleTrip} 
            day={tripDay}
            night={tripNight}
            transportation={transport}
            datetrip={dateTrip}
            accomodation={accomodation}
            status={status}
            />
            <EndPayment 
            styling={endPayment} 
            username={fullname} 
            phone={phone}
            price={price}
            qtyCounter={qtycounter}
            />
          </Modal.Body>
          <div style={{
            display: "flex",
            justifyContent: "end"
          }}>
            <button style={buttonA}>Cancel</button>
            <button style={buttonB}>Approve</button>
          </div>
      </Modal>
    </>
  );
}


export default AdminModal;
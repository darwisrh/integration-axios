import { Link } from "react-router-dom";
import AdminDrop from "./dropDown";
import LoginNav from "../LoginNav";
import Card from 'react-bootstrap/Card';
import Footer from "../footer";
import 'bootstrap/dist/css/bootstrap.min.css';

// Sike
let admin = '/income-transaction'

// Styling
const test = [
  {
    width: "100px",
    position: "absolute",
    top: "982px",
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
  justifyContent: "center"
}

const wrapper = {
  width: "1200px"
}

// Header
const header = {
  marginTop: "90px",
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center"
}

const link = {
  background: "#FFAF00",
  width: "150px",
  height: "50px",
  fontSize: "18px",
  fontWeight: "800",
  color: "white",
  border: "1px solid #FFAF00",
  borderRadius: "5px",
  textDecoration: "none"
}

const pLink = {
  margin: 0,
  display: "flex",
  justifyContent: "center",
  position: "relative",
  top: "11px"
}

const h2 = {
  fontWeight: "800",
  fontSize: "36px"
}

// Card
const cardWrapper = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "30px",
  marginBottom: "50px"
}

const cardGroup = {
  width: "350px",
  height: "350px",
  padding: "10px",
  margin: "15px"
}

const cardBody = {
  margin: "0",
  width: "100%",
  padding: "0"
}

const cardText = {
  display: "flex",
  justifyContent: "space-between"
}


const IncomeTrip = ({isLogAdmin, oldArray, form}) => {
  console.log(oldArray);
    return (
      <>
        <LoginNav test={test} Drop={AdminDrop} admin={admin}/>
        <div style={container}>

          <div style={wrapper}>

            <div style={header}>
              <h2 style={h2}>Income Trip</h2>
              <Link to="/income-trip/addtrip" style={link}><p style={pLink}>Add Trip</p></Link>
            </div>

            <div style={cardWrapper}>
              {
                oldArray.map((card) => (
                  <Card style={cardGroup}>
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body style={cardBody}>
                    <Card.Title style={{fontWeight: 600, fontSize: "22px", margin: "15px 0 10px"}}>{card.title}</Card.Title>
                    <Card.Text style={cardText}>
                      <p style={{
                        color: "#FFAF00",
                        fontSize: "18px",
                        fontWeight: "800",
                        margin: 0
                      }}>IDR. {card.price.toLocaleString()}</p>
                      <p style={{
                        color: "#878787",
                        fontSize: "18px",
                        margin: 0
                      }}>{card.country}</p>
                    </Card.Text>
                  </Card.Body>
              </Card>
                ))
              }
            </div>

          </div>

        </div>
        <Footer />
      </>
    )
  
}

export default IncomeTrip;
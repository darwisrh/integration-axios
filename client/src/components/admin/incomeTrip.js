import '../../css/header.css'
import { Link } from "react-router-dom";
import AdminDrop from "./dropDown";
import LoginNav from "../LoginNav";
import Card from 'react-bootstrap/Card';
import Footer from "../footer";
import 'bootstrap/dist/css/bootstrap.min.css';

// Fetching Stuff
import { useQuery } from "react-query";
import { API } from "../../config/api";

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

const IncomeTrip = () => {

  let {data: tourCards} = useQuery('tourCardsCache', async () => {
    const response = await API.get('/trips')
    return response.data.data
  })

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
          tourCards?.map((tour) => (
          <Card style={{ width: '330px', padding: '10px', height: '330px', margin: '20px' }} className="card-wrapper">
            <div className="quantity">
              {tour?.qtyCounter}/{tour?.quota}
            </div>
            <Card.Img className="card-image" variant="top" src={tour?.image} />
            <div className='m-0 p-0'>
              <p style={{margin: '10px 0'}}><Link>{tour?.title}</Link></p>
              <ul>
                <li>IDR. {tour?.price.toLocaleString()}</li>
                <li>{tour?.country.name}</li>
              </ul>
            </div>
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
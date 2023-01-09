import '../css/detail.css'
import Footer from './footer'
import RegisterModal from './modals/registerModal'
import { useParams } from 'react-router-dom'

// Detail Images
import Detail2 from '../images/Details/detail2.png'
import Detail3 from '../images/Details/detail3.png'
import Detail4 from '../images/Details/detail4.png'

// Info Data
import Plane from '../images/Detail2/plane.png'
import Hotel from '../images/Detail2/hotel.png'
import Meal from '../images/Detail2/meal.png'
import Calendar from '../images/Detail2/calendar.png'
import Time from '../images/Detail2/time.png'
import Minus from '../images/Detail2/Minus.png'
import Plus from '../images/Detail2/Plus.png'
import { useState } from 'react'
import LoginModal from './modals/loginModal'
import { useQuery } from 'react-query';
import { API } from '../config/api';

const InfoDatas = ({img, title, header}) => {
  return (
    <div className="info-data-b">
      <p>{header}</p>
      <ul>
        <li><img src={img} alt="plane" /></li>
        <li>{title}</li>
      </ul>
    </div>
  )
}

const buttonStyle = {
  background: "#FFAF00",
  width: "200px",
  height: "50px",
  fontSize: "18px",
  fontWeight: "800",
  border: "1px solid #FFAF00",
  color: "white"
}

const DetailContent = ({admin}) => {
  // Register Modal
  const [showR, setShowR] = useState(false);
  const handleShow = () => setShowR(true);

  // Login Modal
  const [show, setShow] = useState()
  const handleClose = () => setShow(false);
  const handleShowL = () => setShow(true);
  // Login Modal

    let detailId = useParams()

    let {data: tourDetail} = useQuery('tripCache', async () => {
      const response = await API.get(`/trip/${detailId.id}`);
      return response.data.data
    })


    let [counter, setCounter] = useState(tourDetail?.qtyCounter)
    
    const plus = () => {
      if (counter >= tourDetail?.quota - 1) {
        counter = tourDetail?.quota
      }
      setCounter(counter + 1)
    }
    
    const minus = () => {
      if (counter <= 1) {
        counter = 1
      }
      setCounter(counter - 1)
    }

    let intPrice = tourDetail?.price
    let stringPrice = intPrice.toLocaleString()
    let tourPrice = tourDetail?.price * counter
    let finalPrice = tourPrice.toLocaleString()

  return (
    <>
    <div className="detail-cont">
      <div className="cont-wrapper">

        <div className="header-cont">
          <h1>{tourDetail?.title}</h1>
          <p>{tourDetail?.country.name}</p>
        </div>

        <div className="image-cont">
          <div>
            <img src={tourDetail?.image} alt="opera" style={{width: "1018px", borderRadius: "5px"}}/>
          </div>
          <div className="detail-images">
            <img src={Detail2} alt="detail" />
            <img src={Detail3} alt="detail" />
            <img src={Detail4} alt="detail" />
          </div>
        </div>

        <div className="information-trip">
          <div className="info-header">
            <h3>Information Trip</h3>
          </div>

          <div className="info-data">
            <InfoDatas img={Hotel} title={tourDetail?.accomodation} header="Accommodation"/>
            <InfoDatas img={Plane} title={tourDetail?.transportation} header="Transportation"/>
            <InfoDatas img={Meal} title={tourDetail?.eat} header="Eat"/>
            <InfoDatas img={Time} title={`${tourDetail?.day} Day ${tourDetail?.night} Night`} header="Duration"/>
            <InfoDatas img={Calendar} title={tourDetail?.datetrip} header="Date Trip"/>
          </div>

          <div className="description-cont">
            <p>
              Description
            </p>
            <p>
              {tourDetail?.description}
            </p>
          </div>
        </div>

        <div className="payment-setting">
          <div className="top-payment">
            <ul>
              <li>
                <p style={{ fontSize: "24px", fontWeight: "800", color: "#FFAF00", marginRight: "10px"}}>
                IDR. {stringPrice}
                </p>
                <p style={{ fontSize: "24px", fontWeight: "800"}}>
                  / Person
                  </p>
              </li>
              <li>
                <img style={{
                  width: "26.62px",
                  height: "26.62px",
                  cursor: "pointer"
                }} src={Minus} alt="minus" onClick={minus}/>
                <p style={{ fontSize: "18px", fontWeight: "800"}}>{counter}</p>
                <img style={{
                  width: "26.62px",
                  height: "26.62px",
                  cursor: "pointer"
                }} src={Plus} alt="plus" onClick={plus}/>
              </li>
            </ul>
          </div>

          <hr />

          <div className="bottom-payment">
            <ul>
              <li>Total :</li>
              <li>IDR. {finalPrice}</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="payment-button">
          <LoginModal 
            show={show} 
            setShow={setShow} 
            handleClose={handleClose} 
            handleShowR={handleShow} 
            style={buttonStyle} 
            value="BOOK NOW"
            handleShowL={handleShowL}
            admin={admin}
            />
          <div style={{visibility: "hidden", position: "absolute"}}>
            <RegisterModal show={showR} setShow={setShowR} handleShow={handleShow}/>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  )
}

export default DetailContent;
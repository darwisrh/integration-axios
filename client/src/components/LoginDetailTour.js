import LoginNav from "./LoginNav"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import LoginPayment from "./LoginPayment"
import Footer from "./footer"
import ProfileDrop from "./modals/ProfileDd"

// Detail Images
import Opera from '../images/Details/detail1.png'
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

const test = [
  {
    width: "100px",
    position: "absolute",
    top: "1277px",
    left: "1249px"
  },

  {
    position: "absolute",
    top: "300px",
    right: "1240px"
  }
]

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

let HomeLogin = '/name-home'
const LoginDetailTour = ({ isLogin, cardTour, setPriceUser, setDoneCount, setGetCountry, setGetTitle}) => {
  
  let detailId = useParams()
  let cards = cardTour.find(card => card.id == detailId.id)
  let {country, title, price, id } = cards


  let [counter, setCounter] = useState(1)

  const plus = () => {
    setCounter(counter + 1)
  }

  const minus = () => {
    if (counter <= 1) {
      counter = 1
    }
    setCounter(counter - 1)
  }

  let intPrice = Number(price)
  let stringPrice = intPrice.toLocaleString()
  let tourPrice = Number(price * counter)
  let finalPrice = tourPrice.toLocaleString()


  // user


  return (
    <>
      <LoginNav test={test} Drop={ProfileDrop} isLogin={isLogin} admin={HomeLogin}/>
      <div>
      <div className="detail-cont">
      <div className="cont-wrapper">

        <div className="header-cont">
          <h1>{setGetTitle(title)}{title}</h1>
          <p>{setGetCountry(country)}{country}</p>
        </div>

        <div className="image-cont">
          <div>
            <img src={Opera} alt="opera" />
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
            <InfoDatas img={Hotel} title="Hotel 4 Nights" header="Accommodation"/>
            <InfoDatas img={Plane} title="Qatar Airways" header="Transportation"/>
            <InfoDatas img={Meal} title="Included as ltinerary" header="Eat"/>
            <InfoDatas img={Time} title="6 Days 4 Nights" header="Duration"/>
            <InfoDatas img={Calendar} title="26 August 2020" header="Date Trip"/>
          </div>

          <div className="description-cont">
            <p>
              Description
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                <p style={{ fontSize: "18px", fontWeight: "800"}}>{setDoneCount(counter)}{counter}</p>
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
              <li>IDR. {setPriceUser(finalPrice)}{finalPrice}</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="payment-button">
          <Link className='button' to={`/name-home/name-payment/${id}`} element={<LoginPayment/>}>BOOK NOW</Link>
        </div>
      </div>
    </div>
      <Footer />
      </div>
    </>
  )
}

export default LoginDetailTour;
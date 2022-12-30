import LoginNav from "./LoginNav"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import LoginPayment from "./LoginPayment"
import Footer from "./footer"
import ProfileDrop from "./modals/ProfileDd"
import { useQuery } from "react-query"
import { API } from "../config/api"

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

const LoginDetailTour = () => {
  
  let detail = useParams()
  
  let {data: detailTour} = useQuery('tourCache', async () => {
    const response = await API.get(`/trip/${detail.id}`)
    return response.data.data
  })
  console.log(detailTour);

  // let [counter, setCounter] = useState(1)

  // const plus = () => {
  //   setCounter(counter + 1)
  // }

  // const minus = () => {
  //   if (counter <= 1) {
  //     counter = 1
  //   }
  //   setCounter(counter - 1)
  // }

  // let intPrice = Number(price)
  // let stringPrice = intPrice.toLocaleString()
  // let tourPrice = Number(price * counter)
  // let finalPrice = tourPrice.toLocaleString()


  // user


  return (
    <>
      <LoginNav test={test} Drop={ProfileDrop}/>
      <div>
      <div className="detail-cont">
      <div className="cont-wrapper">

        <div className="header-cont">
          <h1>{detailTour?.title}</h1>
          <p>{detailTour?.country.name}</p>
        </div>

        <div className="image-cont">
          <div>
            <img src={detailTour?.image} alt="opera" style={{width: "1018px", borderRadius: "5px"}}/>
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
            <InfoDatas img={Hotel} title={detailTour?.accomodation} header="Accommodation"/>
            <InfoDatas img={Plane} title={detailTour?.transportation} header="Transportation"/>
            <InfoDatas img={Meal} title={detailTour?.eat} header="Eat"/>
            <InfoDatas img={Time} title={`${detailTour?.day} Day ${detailTour?.night}`} header="Duration"/>
            <InfoDatas img={Calendar} title={detailTour?.datetrip} header="Date Trip"/>
          </div>

          <div className="description-cont">
            <p>
              Description
            </p>
            <p>
              {detailTour?.description}
            </p>
          </div>
        </div>

        <div className="payment-setting">
          <div className="top-payment">
            <ul>
              <li>
                <p style={{ fontSize: "24px", fontWeight: "800", color: "#FFAF00", marginRight: "10px"}}>
                IDR. {detailTour?.price.toLocaleString()}
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
                }} src={Minus} alt="minus" />
                <p style={{ fontSize: "18px", fontWeight: "800"}}>{detailTour?.qtyCounter}</p>
                <img style={{
                  width: "26.62px",
                  height: "26.62px",
                  cursor: "pointer"
                }} src={Plus} alt="plus" />
              </li>
            </ul>
          </div>

          <hr />

          <div className="bottom-payment">
            <ul>
              <li>Total :</li>
              <li>IDR. {detailTour?.price.toLocaleString()}</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="payment-button">
          <Link to={`/payment/${detailTour?.id}`} className='button'>BOOK NOW</Link>
        </div>
      </div>
    </div>
      <Footer />
      </div>
    </>
  )
}

export default LoginDetailTour;
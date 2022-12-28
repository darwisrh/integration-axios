import NavigationBar from './navbar';
import DetailContent from './detailContent';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const Detail = ({isLogin, isLogAdmin, cardTour, admin}) => {
  return (
    <>
      <NavigationBar test={test} isLogin={isLogin} isLogAdmin={isLogAdmin} admin={admin}/>
      <DetailContent isLogin={isLogin} isLogAdmin={isLogAdmin} cardTour={cardTour} admin={admin}/>
    </>
  )
}

export default Detail;
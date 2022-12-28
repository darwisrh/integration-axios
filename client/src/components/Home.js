import Header from "./header"
import Content from "./content"
import Footer from "./footer"

const Home = ({ isLogin, isLogAdmin, cardTour, admin }) => {
  return (
    <div className="main">
      <Header isLogin={isLogin} isLogAdmin={isLogAdmin} admin={admin}/>
      <Content cardTour={cardTour}/>
      <Footer />
    </div>
  )
}

export default Home;
import '../css/content.css';
import TourCard from './tourCard';

// Country Image
import Japan from '../images/Japan.png'
import Indonesia from '../images/indonesia.png'
import Korea from '../images/korea.png'
import Australia from '../images/australia.png'

const Content = ({ cardTour }) => {

  return(
    <>
      <div className='container'>
        <div className='content'>
          <h1>Group Tour</h1>
        </div>
        <div className='tour-card-cont'>
          <TourCard cardTour={cardTour}/>
        </div>
      </div>
    </>
  )
}

export default Content
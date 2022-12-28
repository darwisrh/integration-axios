import '../css/content.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Detail from './detail';
import 'bootstrap/dist/css/bootstrap.min.css';

function TourCard({ cardTour }) {
  return (
    <>
      {
        cardTour.map((tour) => (
          <Card style={{ width: '330px', padding: '10px', height: '330px', margin: '20px' }}>
            <Card.Img variant="top" src={tour.image} />
            <div className='m-0 p-0'>
              <p style={{margin: '10px 0'}}><Link to={`/detail/${tour.id}`} element={<Detail />}>{tour.title}</Link></p>
              <ul>
                <li>IDR. {tour.price.toLocaleString()}</li>
                <li>{tour.country}</li>
              </ul>
            </div>
          </Card>
        ))
      }
    </>
  );
}

export default TourCard;
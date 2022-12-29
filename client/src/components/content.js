import '../css/content.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Detail from './detail';
import 'bootstrap/dist/css/bootstrap.min.css';

// Fetching Database Stuff
import { useQuery } from 'react-query';
import { API } from '../config/api';

const Content = () => {

  let {data: tourCards} = useQuery('productsCache', async () => {
    const response = await API.get('/trips')
    return response.data.data
  })

  console.log(tourCards);

  return(
    <>
      <div className='container'>
        <div className='content'>
          <h1>Group Tour</h1>
        </div>
        <div className='tour-card-cont'>
        {
        tourCards?.map((tour) => (
          <Card style={{ width: '330px', padding: '10px', height: '330px', margin: '20px' }} className="card-wrapper">
            <div className="quantity">
              {tour.quota}/30
            </div>
            <Card.Img className="card-image" variant="top" src={tour.image} />
            <div className='m-0 p-0'>
              <p style={{margin: '10px 0'}}><Link to={`/detail/${tour.id}`} element={<Detail />}>{tour.title}</Link></p>
              <ul>
                <li>IDR. {tour.price.toLocaleString()}</li>
                <li>{tour.country.name}</li>
              </ul>
            </div>
          </Card>
        ))
      }
        </div>
      </div>
    </>
  )
}

export default Content
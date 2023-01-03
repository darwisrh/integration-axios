import Table from 'react-bootstrap/Table';
import Footer from '../footer';
import AdminModal from '../modals/adminModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from '../../config/api';
import { useQuery } from 'react-query';

// Styling
const tableWrapper = {
  display: "flex",
  justifyContent: "center"
}

const tableBody = {
  width: "1250px",
  marginTop: "15px",
  marginBottom: "100px",
  border: "1px solid black"
}

const tableRow = {
  height: "70px",
  background: "white"
}

function IncomeTable() {

  let {data: transaction} = useQuery('transactionCacheB', async () => {
    const response = await API.get('/transactions')
    return response.data.data
  })
  console.log(transaction);

  return (
    <>
      <div style={tableWrapper}>
        <div style={{marginTop: "90px", height: "90vh"}}>
        <h2 style={{fontSize: "34px", fontWeight: "800"}}>Income Transaction</h2>
          <Table striped bordered hover style={tableBody}>
          <thead>
            <tr style={tableRow}>
              <th>No</th>
              <th>Users</th>
              <th>Trip</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              transaction?.map((trans, i) => (
                <tr style={tableRow}>
                  <td>{i + 1}</td>
                  <td>{trans?.user.fullname}</td>
                  <td>{trans?.trip.title}</td>
                  <td>{trans?.attachment}</td>
                  <td>{trans?.status}</td>
                  <td><AdminModal/></td>
                </tr>
              ))
            }
          </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default IncomeTable;
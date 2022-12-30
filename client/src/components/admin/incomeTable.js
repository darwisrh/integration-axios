import Table from 'react-bootstrap/Table';
import Footer from '../footer';
import AdminModal from '../modals/adminModal';
import 'bootstrap/dist/css/bootstrap.min.css';

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

// function changeColor(statusPayment) {
//   if(statusPayment === 'Pending'){
//     statusPayment = {color: "#F7941E"}
//   } else if (statusPayment === 'Approve'){
//     statusPayment = {color: "#0ACF83"}
//   } else if (statusPayment === 'Cancel'){
//     statusPayment = {color: "#FF0742"}
//   }
// }


function IncomeTable({ inTrans, getCountry, getTitle }) {

  return (
    <>
      <div style={tableWrapper}>
        <div style={{marginTop: "90px"}}>
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
            {/* {
              inTrans.map(income => (
                <tr style={tableRow}>
                  <td>{income.id}</td>
                  <td>{income.user}</td>
                  <td>{income.trip}</td>
                  <td>{income.buktiTransfer}</td>
                  <td>{income.statusPayment}</td>
                  <td><AdminModal getCountry={getCountry} getTitle={getTitle}/></td>
                </tr>
              ))
            } */}
          </tbody>
          </Table>
        </div>
      </div>
    <Footer />
    </>
  );
}

export default IncomeTable;
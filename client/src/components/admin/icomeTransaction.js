import LoginNav from '../LoginNav'
import AdminDrop from './dropDown';
import IncomeTables from './incomeTable';

// Styling
const test = [
  {
    width: "100px",
    position: "absolute",
    top: "668px",
    left: "1249px"
  },

  {
    position: "absolute",
    top: "300px",
    right: "1240px"
  }
]

let admin = '/income-trip'

const IncomeTransaction = ({ isLogAdmin, inTrans, getCountry, getTitle }) => {
    return (
      <>
        <LoginNav test={test} Drop={AdminDrop} admin={admin} isLogAdmin={isLogAdmin}/>
        <IncomeTables inTrans={inTrans} getCountry={getCountry} getTitle={getTitle}/>
      </>
    )
}

export default IncomeTransaction;
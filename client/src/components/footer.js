import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer style={{ 
          background: "#FFAF00", 
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          }}>
          <p style={{
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: "600",
            margin: "0"
          }}>
            Copyright @ 2020 Dewe Tour - Darwis Revi H - NIS. All Rights reserved
          </p>
        </footer>
      </>
    )
  }
}

export default Footer;
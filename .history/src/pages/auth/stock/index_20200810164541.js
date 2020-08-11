
    // eslint-disable-next-line
    /* eslint-disable */

import React, { Fragment } from "react";
import CountdownComponent from "./countdownData";
import { Container } from "reactstrap";
const ComingsoonImg = (props) => {
  return (
    <Fragment>
      <div className="page-wrapper">
        <Container fluid={true} className="p-0 m-0">
          <div className="comingsoon comingsoon-bgimg">
            <div className="comingsoon-inner text-center">
              <img
                src={require("../../assets/images/other-images/coming-soon-Logo.png")}
                alt=""
              />
              <h5>WE ARE COMING SOON</h5>
              <div className="countdown" id="clockdiv">
                <CountdownComponent />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};
export default ComingsoonImg;

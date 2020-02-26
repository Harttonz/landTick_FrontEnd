import React, { Component, Fragment } from "react";
import { Col, Row,Container,Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Dashboard.css";
class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="sidebar-left">
          <nav className="siderUp">
            <Link to="/profile">
              <img
                src={require("../img/bgCat.jpg")}
                className="imgsiderup"
              ></img>
            </Link>
            <div className="namepet">Frizel</div>
            {/* <img src={require("../img/icon/arrow1.jpg")} className="arrow"></img> */}
          </nav>
          <div className="siderBottom">
            <hr></hr>
            <div className="match">Match</div>
          </div>

          <div className="boxmiddle">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={require("../img/image1.jpg")}
                  class="img-responsive"
                ></img>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../img/image2.jpg")}
                  class="img-responsive"
                ></img>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../img/images3.jpg")}
                  class="img-responsive"
                ></img>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={require("../img/images4.jpg")}
                  class="img-responsive"
                ></img>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../img/images5.jpg")}
                  class="img-responsive"
                ></img>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../img/image6.jpg")}
                  class="img-responsive"
                ></img>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={require("../img/image7.jpg")}
                  class="img-responsive"
                ></img>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../img/image8.jpg")}
                  class="img-responsive"
                ></img>
              </div>
              <div className="col-md-4">
                <img
                  src={require("../img/images9.jpg")}
                  class="img-responsive"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-right">
          <div className="boximg">
            <div className="textprofil">
              <div className="petname">Grenzy flou</div>
              <div className="feeder"> Feeder : Harttonz Zurkerbeg</div>
              <div className="m">3 m dari sini</div>
            </div>
            <div className="icon">
              <div className="usericon"></div>
              <div className="locwhite"></div>
            </div>
          </div>
          <div className="RoundedButton">
            <img src={require("../img/icon/roll1.png")} class="iroll"></img>
            <img src={require("../img/icon/cross1.png")} class="icross"></img>
            <img src={require("../img/icon/love1.png")} class="ilove"></img>
            <img src={require("../img/icon/light.png")} class="ilight"></img>
          </div>
          <div className="textline">
            <img src={require("../img/icon/left.png")} class="ileft"></img>No
            <img src={require("../img/icon/right.png")} class="ileft"></img>Yes
            <img src={require("../img/icon/up.png")} class="ileft"></img>Open
            profile
            <img src={require("../img/icon/down.png")} class="ileft"></img>Close
            profile
          </div>
        </div>
      </>
    );
  }
}
export default Dashboard;

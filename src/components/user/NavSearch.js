import React,{Component,Fragment} from "react";
import {Row,Col} from "react-bootstrap";
import { getTicketsSearch } from '../../_actions/ticketA';
import { connect } from "react-redux";
import User from "../user/userIndex";
class NavSearch extends Component{
        constructor(){
        super()
        this.state = {
            station_start : '',
            destination  :'',
            firstDate    :'',
            SecondDate   :'',
            adultQty     :0,
            babyQty      :0,
            totalQty     :0,
            formErr      :false
          }
        }
        handleTotalQty = (total) =>{
          this.setState({
            totalQty:total
          })
         }

        totalQty = () =>{
          let qty = this.state.adultQty+this.state.babyQty;
          this.handleTotalQty(qty)
        }
        MaxAdultQty = () =>{
          this.setState({
            adultQty:this.state.adultQty+1
          },()=>this.totalQty())
        }

        MinAdultQty = () =>{
          if(this.state.adultQty > 0){
            this.setState({
              adultQty:this.state.adultQty-1
            },()=>this.totalQty())
          }
        }

        MaxBabyQty = () =>{
          this.setState({
            babyQty:this.state.babyQty+1
          },()=>this.totalQty())
        }

        MinBabyQty = () =>{
          if(this.state.babyQty >0 ){
            this.setState({
              babyQty:this.state.babyQty-1
            },()=>this.totalQty())
          }
        }

        handleChange = (event) =>{
          this.setState({
            [event.target.name]:event.target.value
          })
        }
       
        reverseStation = () =>{
          let station_start = this.state.station_start;
          let destination   = this.state.destination;
          this.setState({
            station_start:destination,
            destination:station_start
          })
        }
       
        handleSearchTicket = ()=>{
          if((this.state.station_start.length < 0) ||(this.state.destination.length < 0)){
            this.setState({
              formErr: true
          })
          }else{
              this.setState({
                  formErr: false
              })
  
              let dataSearch = {
                  date_time_gte: this.state.firstDate,
                  date_time_lte: this.state.SecondDate,
                  start_station: this.state.station_start,
                  destination: this.state.destination
              }
  
              this.props.Search(dataSearch)
          }
      }

        componentDidMount(){
          const date = new Date()
          const dateNow = `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
          this.setState({
              firstDate: dateNow,
              SecondDate: dateNow
          })
        }


 render(){
   return(
     <Fragment>
     <div className="searchBox">
          <div className="bfleftIndex">
          <div className="bfupperindex">    
              <img src={require("../../img/train.png")}className="trainlogoindex"/>
                <p className="traintextindex">The Train's ticket</p>
              </div>
          </div> 
        <div className="bfrightIndex">
          <Row>
               <Col xs={4}> <div className="trainindex">The Train</div></Col>
          </Row>
          <Row>
              <Col xs={4}><div className="fromindex">From</div></Col>
              <Col xs={4}><div className="fromdestinationindex">Destination</div></Col>
              <Col xs={4}>{this.state.formErr ? (<div className="notice">Type keyword first</div>):""}</Col>
          </Row>
          <Row>
             <Col xs={4} ><input type="text" className="textfromindex"  placeholder="Jakarta" onChange={this.handleChange} name="station_start" value={this.state.station_start}/></Col>
            <Col xs={4} ><img src={require("../../img/rounded.png")}className="exchangelogoindex" onClick={this.reverseStation}/></Col>
            <Col xs={4}><input type="text" className="textdesindex" placeholder="Surabaya" onChange={this.handleChange} name="destination" value={this.state.destination}/></Col>
          </Row>
          <Row>
            <Col md={4}><div className="fromindex">Departure Date</div></Col>
            <Col md={4}><div className="adultindex">Adult</div></Col>
            <Col md={4}><div className="babyindex">Baby</div></Col>
          </Row>
          <Row>
          <input  type="date" className="textdepartureindex1" onChange={this.handleChange} value={this.state.firstDate} name="firstDate"/>- 
          <input  type="date" className="textdepartureindex2" onChange={this.handleChange} value={this.state.SecondDate} name="secondDate"/>
          </Row>
          <Row>
            <Col xs={4}><input type="checkbox" className="checkppindex"></input> Round Trip</Col>
          </Row>
            <div className="AdultQty">
                  <button className="min1" onClick={this.MinAdultQty}>
                    <img src={require("../../img/min.png")}/>
                  </button>
                    <p className="qty1">{this.state.adultQty}</p>
                  <button className="plus1" onClick={this.MaxAdultQty}>
                    <img src={require("../../img/plus.png")} />
                  </button>
            </div>  
            <div className="BabyQty">
                  <button className="min2" onClick={this.MinBabyQty}>
                    <img src={require("../../img/min.png")}/>
                  </button>
                    <p className="qty2">{this.state.babyQty}</p>
                  <button className="plus2" onClick={this.MaxBabyQty}>
                    <img src={require("../../img/plus.png")} />
                  </button>
            </div>   
      
              <button type="button" className="searchindex" onClick={this.handleSearchTicket}>
              Search Ticket
              </button> 
     </div>
     </div>    
     <div><User qty ={this.handleTotalQty} /></div>  
     </Fragment>
   )
 }
}

const mapStateToProps = (state) =>{
  return{
      isLoading: state.ticketR.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      Search: (data)=> dispatch( getTicketsSearch(data) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch)
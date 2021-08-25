import React, { Component }  from "react";
import Card from "../../components/FR_my_card";
import { Container } from "react-bootstrap";

export class FR_my extends Component{
  render(){
  return (
    <div>
      <Container>
        <div className="my-3 d-flex">
          <div style={{ fontSize: "20px" }} className="mr-3">
            審核狀態
          </div>
          <div>
            <select className="Dropdown" style={{ borderRadius: "10px",height:"1.8em",backgroundColor:"white"}}>
              <option value="grapefruit">通過</option>
              <option value="lime">未通過</option>
              <option value="coconut">財務負責人已審核</option>
              <option value="mango">組織負責人已審核</option>
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <Card /> <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </div>
  );
}
}

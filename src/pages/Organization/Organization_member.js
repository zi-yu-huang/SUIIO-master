import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../components/Organization_nav";
import { Input } from "semantic-ui-react";
import Member from "../../components/Member";

function Organization_member() {
  return (
    <div>
      <Container>
        <NavBar />
        <div className="row justify-content-between my-4">
          <div className=" col">
            <select className="Dropdown">
              <option value="grapefruit">學年度</option>
              <option value="lime">109</option>
              <option value="coconut">108</option>
              <option value="mango">107</option>
            </select>
          </div>
          <div className="col">
            <Input
              action={{ icon: "add" }}
              placeholder="輸入成員學號"
              className="d-flex justify-content-end"
              class="event"
            />
          </div>
        </div>
        <div className="row align-items-center">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
      </Container>
    </div>
  );
}

export default Organization_member;

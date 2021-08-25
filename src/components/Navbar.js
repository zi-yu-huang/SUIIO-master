import React from "react";
import "../styles/Navbar.css";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const aText = { textDecoration: "none", ":hover": { textDecoration: "none" } };
function NavBar() {
  return (
    <div>
      
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="phone"
      >         

        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav" style={{color:"white"}}>
          <Nav className="mr-auto" style={aText}>
            <NavDropdown title="組織管理" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Organization/event">
                活動
              </NavDropdown.Item>
              <NavDropdown.Item href="/Organization/cadre">
                幹部
              </NavDropdown.Item>

              <NavDropdown.Item href="/Organization/member">
                成員
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="會議管理" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="財務管理" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Financial/statements">
                財務報表
              </NavDropdown.Item>
              <NavDropdown.Item href="/Financial/records">
                收支紀錄
              </NavDropdown.Item>

              <NavDropdown.Item href="/Financial/management">
                預算管理
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="留言管理" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="個人資料" id="basic-nav-dropdown"></NavDropdown>
          </Nav>
          <div className="d-flex mt-2">
            <Button variant="outline-success">組織頁面</Button>&nbsp;
            <Button variant="outline-success">登出</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <aside>
        <div>
          <img
            src={require("../image/home.png").default}
            alt="cancel"
            style={{ width: "50px", height: "50px" }}
            className="my-2"
          />
          <br />
          <a href="/Organization/event">組織管理</a>
        </div>
        <div>
          <img
            src={require("../image/note.png").default}
            alt="cancel"
            style={{ width: "50px", height: "50px" }}
            className="my-2"
          />
          <br />
          <a href="/Financial/event">會議管理</a>
        </div>
        <div>
          <img
            src={require("../image/inbox.png").default}
            alt="cancel"
            style={{ width: "50px", height: "50px" }}
            className="my-2"
          />
          <br />
          <a href="/Financial/statements">財務管理</a>
        </div>
        <div>
          <img
            src={require("../image/bar-chart.png").default}
            className="my-2"
            alt="cancel"
            style={{ width: "50px", height: "50px" }}
          />
          <br />
          <a href="/Organization/event">留言管理</a>
        </div>
      </aside>
    </div>
  );
}
export default NavBar;

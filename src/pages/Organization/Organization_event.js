import React from "react";
import { Container} from "react-bootstrap";
import "../../styles/Organization_event.css";
import { Input } from "semantic-ui-react";
import NavBar from "../../components/Organization_nav";
import AddEvent from "../../components/AddEvent";


function Organization_event(props) {
  function addEvent() {
    const addValue = document.getElementById("addValue");
      <AddEvent/>
  }
  return (
    <div>
      <Container>
        <NavBar />
        <div>
          <div>
            <Input
              action={{ icon: "add", onClick: () => addEvent() }}
              placeholder="輸入活動名稱"
              className="web_input mt-4 mb-3 w-100"
              id="addValue"
            />
          </div>
    <div className="row align-items-center">
          <AddEvent />
          <AddEvent />
          <AddEvent />          <AddEvent />
          <AddEvent />

</div>
        </div>
      </Container>
    </div>
  );
}
export default Organization_event;

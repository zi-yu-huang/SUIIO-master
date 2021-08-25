import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {AuditPass} from "../../components/Audit_pass"
import {AuditCancel} from "../../components/Audit_cancel"

function FM_audit_detail() {
  const [Pass, setPass] = React.useState(false);
  const [Cancel, setCancel] = React.useState(false);

  return (
    <div>
      
      <Container>
        <div className="pt-4">
          <div>
              <table style={{border:"1px solid black"}}>
                  <tr className="title">
                      <td colSpan="2">109大迎新 </td>
                      <td>申請人：
                          <span>公關長</span> </td>

                  </tr>
                  <tr>
                      <td className="green">收支項目 </td>
                      <td  className="green">收入</td>
                      <td>支出</td>
                  </tr>
                  <tr>
                    <td><input type="text"></input></td>
                    <td><input type="text"></input></td>
                    <td><input type="text"></input></td>
                  </tr>
                  <tr>
                    <td><input type="text"></input></td>
                    <td><input type="text"></input></td>
                    <td><input type="text"></input></td>
                  </tr>
              </table>
          </div>
        </div>
        <div className="row"> 
        <Button variant="dark m-2" type="submit"
          onClick={() => setPass(true)}>
          通過
        </Button>
        <Button variant="light m-2" type="submit" onClick={() => setCancel(true)}>
          駁回
        </Button></div>
        <AuditPass show={Pass} onHide={() => setPass(false)} />
        <AuditCancel show={Cancel} onHide={() => setCancel(false)} />

      </Container>
    </div>
  );
}

export default FM_audit_detail;

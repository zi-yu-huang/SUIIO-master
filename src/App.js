import React from 'react'
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OEvent from "./pages/Organization/Organization_event";
import OCadre from "./pages/Organization/Organization_cadre";
import OMember from "./pages/Organization/Organization_member";
import Fstate from "./components/Financial_statements";
import Frecord from "./components/Financial_records";
import Fmanage from "./components/Financial_manage";
import FM_my_detail from "./pages/Financial/FM_my_detail";
import FM_audit_detail from "./pages/Financial/FM_audit_detail";
import FR_audit_detail from "./pages/Financial/FR_audit_detail";
import FR_my_detail from "./pages/Financial/FR_my_detail";
import FS_audit_detail from "./pages/Financial/FS_audit_detail";
import FS_my_detail from "./pages/Financial/FS_my_detail";

function App() {
    return (
        <React.Fragment >
        <Router>
          <NavBar />
          <div className="web_bg overflow-auto">
            <Switch>
              
              <Route path="/Organization/event" exact component={OEvent} />
              <Route path="/Organization/cadre" exact component={OCadre} />
              <Route path="/Organization/member" exact component={OMember} />
              <Route path="/Financial/statements" exact component={Fstate} />
              <Route path="/Financial/records" exact component={Frecord} />
              <Route path="/Financial/management" exact component={Fmanage} />
              
              <Route path="/Financial/management/my/detail" exact component={FM_my_detail} />
              <Route path="/Financial/management/audit/detail" exact component={FM_audit_detail} />

              <Route path="/Financial/records/audit/detail" exact component={FR_audit_detail} />
              <Route path="/Financial/records/my/detail" exact component={FR_my_detail} />

              <Route path="/Financial/statements/audit/detail" exact component={FS_audit_detail} />
              <Route path="/Financial/statements/my/detail" exact component={FS_my_detail} />

            </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
}

export default App;

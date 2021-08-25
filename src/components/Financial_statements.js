import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Navbar } from "./Financial_nav";
import { FS_my } from "../pages/Financial/FS_my";
import { FS_record } from "../pages/Financial/FS_record";
import { FS_upload } from "../pages/Financial/FS_upload";
import { FS_audit } from "../pages/Financial/FS_audit";

function Financial_statements() {
  return (
    <div className=" p-1 mx-1 mt-2">
      <div>
        <Navbar />
      </div>
      <div>
        <Tabs
          fill
          variant="pills"
          defaultActiveKey="record"
          className="m-3 rounded menu bg-secondary"
        >
          <Tab eventKey="my" title="我的財報" tabClassName="text-white">
            <FS_my />
          </Tab>
          <Tab eventKey="record" title="財務報表" tabClassName="text-white">
            <FS_record />
          </Tab>
          <Tab eventKey="upload" title="製作財報" tabClassName="text-white">
            <FS_upload />
          </Tab>
          <Tab eventKey="audit" title="審核財報" tabClassName="text-white">
            <FS_audit />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Financial_statements;

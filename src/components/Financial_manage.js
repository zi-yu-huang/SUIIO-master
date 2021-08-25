import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Navbar } from "./Financial_nav";
import { FM_my } from "../pages/Financial/FM_my";
import { FM_record } from "../pages/Financial/FM_record";
import { FM_upload } from "../pages/Financial/FM_upload";
import { FM_audit } from "../pages/Financial/FM_audit";

function Financial_manage() {
  return (
    <div className=" p-1 mx-1 mt-2">
      <div>
        <Navbar />
      </div>
      <div>
        <Tabs
          fill
          variant="pills red "
          defaultActiveKey="record"
          className="m-3 rounded menu bg-secondary"
        >
          <Tab eventKey="my" title="我的預算" tabClassName="text-white">
            <FM_my />
          </Tab>
          <Tab eventKey="record" title="預算紀錄" tabClassName="text-white">
            <FM_record />
          </Tab>
          <Tab eventKey="upload" title="上傳預算" tabClassName="text-white">
            <FM_upload />
          </Tab>
          <Tab eventKey="audit" title="審核預算" tabClassName="text-white">
            <FM_audit />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Financial_manage;

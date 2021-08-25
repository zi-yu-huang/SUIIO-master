import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Navbar } from "./Financial_nav";
import { FR_my } from "../pages/Financial/FR_my";
import { FR_record } from "../pages/Financial/FR_record";
import { FR_upload } from "../pages/Financial/FR_upload";
import { FR_audit } from "../pages/Financial/FR_audit";

function Financial_records() {
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
          <Tab eventKey="my" title="我的收支" tabClassName="text-white">
            <FR_my />
          </Tab>
          <Tab eventKey="record" title="收支紀錄" tabClassName="text-white">
            <FR_record />
          </Tab>
          <Tab eventKey="upload" title="上傳收支" tabClassName="text-white">
            <FR_upload />
          </Tab>
          <Tab eventKey="audit" title="審核收支" tabClassName="text-white">
            <FR_audit />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Financial_records;

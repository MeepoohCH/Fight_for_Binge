import { useHistory } from "react-router-dom";
import { Row, Col, Button, PageHeader, Slider } from "antd";
import "./styles.css";
import "./index.css";
import { NavBar, Checkbox, List } from "antd-mobile";
import React, { useState, useEffect } from "react";
import { AddOutline, DeleteOutline } from "antd-mobile-icons";
import { useIndexedDB } from "react-indexed-db";

export function MonitoringList() {
  const history = useHistory();
  const { getAll, deleteRecord } = useIndexedDB("monitoring");
  const right = (
    <div style={{ fontSize: 18 }} onClick={() => history.push("/monitoring/0")}>
      <AddOutline />
    </div>
  );
  const [monitorings, setMonitorings] = useState([]);
  useEffect(() => {
    getAll().then((rows) => {
      setMonitorings(rows);
    });
  });

  return (
    <div>
      <NavBar className="Navbar" right={right} onBack={() => history.goBack()}>
        <div>
          <div className="fontHeadNavbar">Monitoring record</div>
          <div className="fontNavbar">ตารางบันทึกการรับประทานอาหาร</div>
        </div>
      </NavBar>
      <List>
        {monitorings.map((item) => (
          <List.Item onClick={() => history.push("/monitoring/" + item.id)}>
            {item.day},{item.time}
          </List.Item>
        ))}
      </List>
    </div>
  );
}
//history.push("/monitoring/"+item.id)

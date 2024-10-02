import { useHistory } from "react-router-dom";
import { Row, Col, Button, PageHeader, Slider } from "antd";
import "./styles.css";
import "./index.css";
import React, { useState } from "react";

export function MonitoringTable() {
  return (
    <div className="wrapper">
      <div style={{ width: 2000 }}>
        <table>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

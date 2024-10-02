import { useHistory } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./styles.css";
import "./index.css";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Blink from "react-blink-text";
import React, { useState } from "react";
import { ImageViewer } from "antd-mobile";

export function Introducing() {
  const history = useHistory();

  return (
    <div>
      <Row className="centered">
        <Col span={24}>
          <img src="Introduce.jpg" alt="Introduce" width="300" />
        </Col>
        <br />
        <Col span={24} className="Space5"></Col>
        <Col span={24} className="FrontTitle">
          {" "}
          ที่มา : เพจเฟสบุ๊ก 1323 ปรึกษาปัญหาสุขภาพจิต{" "}
        </Col>
        <Col span={24} className="Space"></Col>
        <br />
        <Col span={24}>
          <Button
            type="text"
            onClick={() => history.push("/form")}
            className="buttonStyle"
          >
            - แตะเพื่อไปต่อ -
          </Button>
        </Col>
      </Row>
    </div>
  );
}

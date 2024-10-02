import { useHistory } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./styles.css";
import "./index.css";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Blink from "react-blink-text";
import React, { useState } from "react";
import { ImageViewer } from "antd-mobile";

export function Tutorial() {
  const history = useHistory();
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(false);
  const onVisibleChange = (value) => {
    setVisible(value);
  };

  return (
    <div>
      <div className="QuestionCircleOutlinedHead">
        <Button
          type="text"
          onClick={() => {
            setImages(["Tutorial1.png", "Tutorial2.png", "Tutorial3.png"]);
            setVisible(true);
          }}
          className="QuestionCircleOutlined"
        >
          <Col span={24} className="QuestionCircleOutlined1">
            <QuestionCircleOutlined />
          </Col>

          <Blink color="gray" text="คู่มือการใช้งาน" fontSize="5"></Blink>
        </Button>
        <ImageViewer.Multi
          images={images}
          visible={visible}
          defaultIndex={1}
          onClose={() => {
            setVisible(false);
          }}
        />
      </div>
      <br />
      <Row className="centered">
        <Col span={24}>
          <img src="welcome.jpg" alt="caution" width="300" />
        </Col>

        <Col span={24} className="Space"></Col>
        <Col span={24}>
          <Button
            type="text"
            onClick={() => history.push("/home")}
            className="buttonStyle"
          >
            - แตะเพื่อไปต่อ -
          </Button>
        </Col>
      </Row>
    </div>
  );
}

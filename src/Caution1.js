import { useHistory } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./styles.css";
import "./index.css";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Blink from "react-blink-text";
import React, { useState } from "react";
import { useInterval } from "rooks";

const text =
  "1. มีน้ำหนักน้อยหรือมีค่าดัชนีมวลกาย (Body Mass Index : BMI) ของคุณต่ำกว่า 18.5";

export function Caution1() {
  const history = useHistory();
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const showText = () => {
    if (count < text.length) {
      setCount(count + 1);
    } else {
      setShowButton(true);
    }
  };
  const { start, stop } = useInterval(showText, 100, true);
  return (
    <div>
      <div className="QuestionCircleOutlinedHead">
        <Button
          type="text"
          onClick={() => history.push("/bmi")}
          className="QuestionCircleOutlined"
        >
          <Col span={24} className="QuestionCircleOutlined1">
            <QuestionCircleOutlined />
          </Col>

          <Blink color="gray" text="เช็คค่า BMI " fontSize="5"></Blink>
        </Button>
      </div>
      <Row className="centered">
        <Col span={24}>
          <img src="warning.png" alt="caution" width="250" />
        </Col>

        <Col span={24} className="font">
          {text}
          {/* {text.substr(0, count)} */}
        </Col>
        <Col span={24} className="Space"></Col>
        <Col span={24}>
          <Button
            type="text"
            onClick={() => history.push("/caution2")}
            className="buttonStyle"
          >
            - แตะเพื่อไปต่อ -
          </Button>
          {/* {showButton && ( */}
          {/* <Button
            type="text"
            onClick={() => history.push("/caution2")}
            className="buttonStyle"
          >
            - แตะเพื่อไปต่อ -
          </Button> */}
          {/* )} */}
        </Col>
      </Row>
    </div>
  );
}

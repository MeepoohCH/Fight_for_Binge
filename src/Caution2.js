import { useHistory } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./styles.css";
import "./index.css";
import React, { useState } from "react";
import { useInterval } from "rooks";
const text =
  "2. มีโรคประจำตัวที่รุนแรงหรือมีอาการป่วยที่อาจได้รับผลกระทบจากการเปลี่ยนแปลงพฤติกรรมการทานจากปกติคุณควรปรึกษาแพทย์ก่อน";

export function Caution2() {
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
          onClick={() => history.push("/caution3")}
          className="buttonStyle"
        >
          - แตะเพื่อไปต่อ -
        </Button>
        {/* {showButton && ( */}
        {/* <Button
          type="text"
          onClick={() => history.push("/caution3")}
          className="buttonStyle"
        >
          - แตะเพื่อไปต่อ -
        </Button> */}
        {/* )} */}
      </Col>
    </Row>
  );
}

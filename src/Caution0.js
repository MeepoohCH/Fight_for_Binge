import { useHistory } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./styles.css";
import "./index.css";
import React, { useState } from "react";
import { useInterval } from "rooks";

const text =
  "โปรแกรมการบำบัดแบบช่วยเหลือตนเองเบื้องต้นสำหรับผู้ที่เป็นโรคกินไม่หยุด เนื้อหาในแอปพลิเคชันอาจไม่เหมาะสมกับผู้ที่เข้าข่ายกรณีดังต่อไปนี้ (คำเตือนนี้สำหรับผู้ที่ทำตามโปรแกรมการบำบัดใน Part 2 และ Part 3 แต่หากผู้ที่ต้องการแค่เข้าชมเนื้อหาใน Part 1 ซึ่งเป็นความรู้ทั่ว ๆ ไปเกี่ยวกับ Bigne Eating สามารถเข้าชมได้ทุกคนไม่มีข้อคำเตือนใด ๆ ค่ะ)";
export function Caution0(props) {
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
      <Col span={24} className="caution">
        คำเตือน
      </Col>
      <Col span={24} className="Space"></Col>
      <Col span={24} className="font">
        {text}
        {/* {text.substr(0, count)} */}
      </Col>

      <Col span={24} className="Space"></Col>
      <Col span={24}>
        <Button
          type="text"
          onClick={() => history.push("/caution1")}
          className="buttonStyle"
        >
          - แตะเพื่อไปต่อ -
        </Button>
        {/* {showButton && ( */}
        {/* <Button
          type="text"
          onClick={() => history.push("/caution1")}
          className="buttonStyle"
        >
          - แตะเพื่อไปต่อ -
        </Button> */}
        {/* )} */}
      </Col>
    </Row>
  );
}

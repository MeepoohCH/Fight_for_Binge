import { useHistory, useLocation } from "react-router-dom";
import { Row, Col, Button, PageHeader } from "antd";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import Blink from "react-blink-text";
import "./styles.css";
import "./index.css";
import React, { useState, useEffect } from "react";
const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export function Total() {
  const history = useHistory();
  const query = useQuery();
  const [total, setTotal] = useState(query.get("total"));
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState("");
  const [showButton, setShowButton] = useState(true);

  const calculater = () => {
    if (total <= 6.5) {
      setCheck("ยินดีด้วย ^^ คุณไม่เข้าข่ายภาวะ Binge Eating");
      setCount(count + 1);
      setShowButton(false);
    } else {
      setCheck("ไม่นะ!!! คุณเข้าข่ายภาวะ Binge Eating");
      setCount(count + 1);
      setShowButton(false);
    }
  };

  return (
    <div className="backgroundTotal">
      <PageHeader
        className="HeaderForm"
        onBack={() => history.goBack()}
        title="My test"
        extra={[]}
      />
      <Row className="centered">
        {" "}
        <Col span={24} className="centeredTotal">
          Let's check
        </Col>
        <Col span={24} className="Space"></Col>
        <Col span={24} className="Space"></Col>
        <Col span={24} className="Space"></Col>
        <Col span={24}>
          {total <= 6.5
            ? "ยินดีด้วย ^^ คุณไม่เข้าข่ายภาวะ Binge Eating"
            : "ไม่นะ!!! คุณเข้าข่ายภาวะ Binge Eating"}
        </Col>
        <Col span={24} className="Space"></Col>
        <Col span={24} className="Space"></Col>
        <Col span={24} className="Space"></Col>
        <Col span={24} className="Space"></Col>
        {/* <Col span={24}>
          <Button type="text" onClick={calculater}>
            <Blink
              color="#383838"
              text="-แตะหน้าจอเพื่อดูผลลัพธ์-"
              fontSize="5"
            ></Blink>
          </Button>
        </Col> */}
        <Col span={24}>
          {" "}
          <Button
            type="text"
            onClick={() => history.push("/caution0")}
            className="buttonStyle"
          >
            - แตะเพื่อไปต่อ -
          </Button>{" "}
        </Col>
      </Row>
    </div>
  );
}

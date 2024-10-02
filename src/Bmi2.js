import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";
export function Bmi2() {
  const history = useHistory();
  const [weight, setWeight] = useState(0);
  const [hight, setHight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [check, setCheck] = useState("");
  const handleChange = (event) => {
    let w = event.target.value;
    console.log("weight =", w);
    setWeight(w);
  };
  const handleBmiChange = (event) => {
    let h = event.target.value;
    console.log("hight =", h);
    setHight(h);
    let sum = ((weight / h / h) * 10000).toFixed(2);
    setBmi(sum);
    if (sum < 18.5) {
      setCheck("น้ำหนักต่ำกว่าเกณฑ์");
    } else if (sum >= 18.5 && sum < 22.91) {
      setCheck("สมส่วน");
    } else if (sum >= 22.91 && sum < 24.91) {
      setCheck("นำ้หนักเกิน ท้วม");
    } else if (sum >= 24.91 && sum < 29.91) {
      setCheck("เข้าเกณฑ์โรคอ้วน");
    } else {
      setCheck("โรคอ้วนอันตราย");
    }
  };

  return (
    <div className="Test">
      <Row className="bmiBigBox">
        <Col span={24} className="bmihead">
          คำนวณค่า BMI
        </Col>
        <Col span={24} className="Space"></Col>
        <Col span={24}>
          ใส่น้ำหนัก <br />
          (หน่วยกิโลกรัม) :
        </Col>
        <Col span={24} className="Space"></Col>
        <Col span={24} className="Weight">
          <input name="Weight" value={weight} onChange={handleChange} />
        </Col>
        <Col span={24} className="Space"></Col>
        <Col span={24}>ใส่ส่วนสูง (เซนติเมตร) :</Col>
        <Col span={24} className="Space"></Col>
        <Col span={24} className="Weight">
          <input name="hight" value={hight} onChange={handleBmiChange} />
        </Col>
        <Col span={24} className="Space"></Col>
        <Col span={24}>ค่าดัชนีมวลกาย (BMI) : {bmi} </Col>
        <Col span={24} className="Space"></Col>

        <Col span={24}>แปลผล : {check}</Col>
        <br />
        <br />
        <Col span={24}>
          <Button
            type="text"
            onClick={() => history.push("/home")}
            className="buttonStyle"
          >
            - แตะเพื่อย้อนกลับ -
          </Button>
        </Col>
      </Row>
    </div>
  );
}

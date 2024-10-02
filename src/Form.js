import { useHistory } from "react-router-dom";
import { Row, Col, Button, PageHeader, Slider } from "antd";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import "./styles.css";
import "./index.css";
import React, { useState } from "react";

export function Form() {
  const history = useHistory();
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);

  const handleChange1 = (value) => {
    setValue1(value);
  };
  const handleChange2 = (value) => {
    setValue2(value);
  };
  const handleChange3 = (value) => {
    setValue3(value);
  };
  const handleChange4 = (value) => {
    setValue4(value);
  };
  const handleChange5 = (value) => {
    setValue5(value);
  };
  const handleChange6 = (value) => {
    setValue6(value);
  };

  return (
    <div className="Form">
      <PageHeader
        className="HeaderForm"
        onBack={() => history.goBack()}
        title="My test"
        extra={[]}
      />
      <Col span={24} className="Space"></Col>
      <Col span={24} className="fontForm1">
        คำชี้แจง :
        แบบประเมินนี้เป็นแบบประเมินเบื้องต้นสำหรับตรวจสอบว่าคุณมีภาวะเข้าข่าย
        Binge Eating Disorder (โรคกินไม่หยุด) หรือไม่ โดยคะแนนแบ่งเป็น 0 - 6
        คะแนน มาตราประเมินค่า 6 ระดับ จาก (6) ปฏิบัติมากที่สุด ถึง (0) ไม่ได้ปฏิบัติเลยหากข้อความดังกล่าวตรงกับพฤติกรรมที่คุณปฏิบัติ ณ ปัจจุบัน
        คุณลองให้คะแนนตัวเอง หากเลื่อนไปทางด้านขวาแสดงถึงการปฏิบัติบ่อยครั้ง
        เลื่อนไปทางด้านซ้ายคือปฏิบัติน้อยครั้ง (ในแต่ละข้อสามรถเป็น 0 ได้
        หากคุณไม่ได้ปฏิบัติเลย)
      </Col>
      <Col span={24} className="Space"></Col>
      <Col span={24} className="fontForm">
        1. ฉันกินอาหารได้ทุกมื้อ และกินอาหารได้ตลอดเวลา ไม่ว่าจะรู้สึกหิวหรือไม่
      </Col>
      <Col span={24} className="sliderContainer">
        <div className="icon-wrapper">
          <SmileOutlined />
          <Slider min={0} max={6} onChange={handleChange1} value={value1} />
          <FrownOutlined />
        </div>
      </Col>
      <Col span={24} className="fontForm">
        2. ฉันมักจะอยากกินอาหารตลอดเวลา แม้ขณะที่ฉันตื่นขึ้นมาตอนกลางคืน
        ฉันคิดถึงแต่เรื่องกิน
      </Col>
      <Col span={24} className="sliderContainer">
        <div className="icon-wrapper">
          <SmileOutlined />
          <Slider min={0} max={6} onChange={handleChange2} value={value2} />
          <FrownOutlined />
        </div>
      </Col>
      <Col span={24} className="fontForm">
        3. ช่วงระยะเวลา 3 เดือนที่ผ่านมา ฉันกินอาหารได้มากกว่าคนอื่น ๆ
        และในปริมาณมากที่สุดในระยะเวลาที่เท่ากัน
      </Col>
      <Col span={24} className="sliderContainer">
        <div className="icon-wrapper">
          <SmileOutlined />
          <Slider min={0} max={6} onChange={handleChange3} value={value3} />
          <FrownOutlined />
        </div>
      </Col>
      <Col span={24} className="fontForm">
        4. ในช่วงระยะเวลา 3 เดือนที่ผ่านมา ฉันกินอาหารมากกว่าคนอื่นตลอด
        เพราะไม่สามารถที่จะควบคุมการกินของตัวเองได้เลย
      </Col>
      <Col span={24} className="sliderContainer">
        <div className="icon-wrapper">
          <SmileOutlined />
          <Slider min={0} max={6} onChange={handleChange4} value={value4} />
          <FrownOutlined />
        </div>
      </Col>
      <Col span={24} className="fontForm">
        5. ในช่วงระยะเวลา 3 เดือนที่ผ่านมา ฉันกินอาหารจำนวนมากและต่อเนื่อง
        ถึงแม้ว่าจะไม่หิวก็ตาม
      </Col>
      <Col span={24} className="sliderContainer">
        <div className="icon-wrapper">
          <SmileOutlined />
          <Slider min={0} max={6} onChange={handleChange5} value={value5} />
          <FrownOutlined />
        </div>
      </Col>
      <Col span={24} className="fontForm">
        6. แม้ฉันกินอาหารค่อนข้างรวดเร็วและปริมาณมาก
        แต่ไม่เคยหาวิธีการนำอาหารออกจากร่างกายเพื่อให้หายแน่น
      </Col>
      <Col span={24} className="sliderContainer">
        <div className="icon-wrapper">
          <SmileOutlined />
          <Slider min={0} max={6} onChange={handleChange6} value={value6} />
          <FrownOutlined />
        </div>
      </Col>
      <Col span={24} className="Space"></Col>
      <Col span={24}>
        <Button
          type="text"
          onClick={() => {
            let total =
              ((value1 + value2 + value3 + value4 + value5 + value6) * 100) /
              60;
            history.push("/total?total=" + total);
          }}
          className="buttonStyle"
        >
          - ยืนยันทีจะส่งแบบทดสอบ -
        </Button>
      </Col>
      <Col span={24} className="Space"></Col>
    </div>
  );
}

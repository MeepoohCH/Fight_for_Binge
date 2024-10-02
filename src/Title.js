import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
import { useHistory } from "react-router-dom";

export function Title(props) {
  const history = useHistory();

  return (
    <div className="justify">
      <Row>
        <Col span={24}>
          <img src="logo.png" alt="Fight for Binge" width="300" />
        </Col>
        <Col span={24} className="FrontTitle">
          แอปพลิเคชันช่วยเหลือตนเองเบื้องต้นสำหรับผู้ที่เป็นโรคกินไม่หยุด
        </Col>
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={24}>จัดทำโดย</Col>
        <Col span={24} className="Space"></Col>
        <Col span={24}>นางสาวจิรัชยา ตั้งนามประเสริฐ</Col>
        <Col span={24} className="Space"></Col>
        <Col span={24}>นางสาวชนิษา สง่าสงค์</Col>
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={24}>ที่ปรึกษา</Col>
        <Col span={24} className="Space"></Col>
        <Col span={24}>อาจารย์ธมลวรรณ นาวาเจริญ</Col>
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={24}>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ชลบุรี</Col>
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={24}>
          <Button
            type="text"
            onClick={() => {
              console.log(props.user);
              if (props.user) {
                history.push("/home");
              } else {
                history.push("/register");
              }
            }}
            className="buttonStyle"
          >
            - แตะเพื่อเข้าสู่แอปพลิเคชัน -
          </Button>
        </Col>
      </Row>
    </div>
  
  );
}

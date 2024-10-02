import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button, Image } from "antd";
import "./styles.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import { NavBar, ImageViewer } from "antd-mobile";

export function BodyImageRecordSpare() {
  const history = useHistory();
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(false);

  const onVisibleChange = (value) => {
    setVisible(value);
  };

  return (
    <div>
      <NavBar className="Navbar" onBack={() => history.goBack()}>
        <div>
          <div className="fontHeadNavbar">Body Image Record</div>
          <div className="fontNavbar">ตารางการกรอกบันทึกสภาพร่างกาย</div>
        </div>
      </NavBar>
      <ImageViewer.Multi
        images={images}
        visible={visible}
        defaultIndex={1}
        onClose={() => {
          setVisible(false);
        }}
      ></ImageViewer.Multi>
      <div className="monitoringCenter">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div
              type="link"
              onClick={() => {
                setImages(["BodyImage-tutorial.png"]);
                setVisible(true);
              }}
            >
              <div className="monitoringBox1">
                <img
                  src="BodyImage_tutorial_icon.jpg"
                  alt="meepooh"
                  width="80"
                />
                คู่มือการใช้ Body Image Record
              </div>
            </div>
          </Col>

          <Col span={24}>
            <div
              type="link"
              onClick={() => {
                setImages(["BodyImage-ex.png"]);
                setVisible(true);
              }}
            >
              <div className="monitoringBox1">
                <img src="BodyImage_ex_icon.jpg" alt="meepooh" width="80" />
                ตัวอย่าง Body Image Record
              </div>
            </div>
          </Col>

          <Col span={24}>
            <div
              type="link"
              onClick={() => {
                setImages(["BodyImage.png", "BodyImage-normal.png"]);
                setVisible(true);
              }}
            >
              <div className="monitoringBox1">
                <img src="BodyImage_table_icon.jpg" alt="meepooh" width="80" />
                ตาราง Body Image Record
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

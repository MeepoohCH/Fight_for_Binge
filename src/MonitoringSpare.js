import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button, Image } from "antd";
import "./styles.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import { NavBar, ImageViewer } from "antd-mobile";
export function MonitoringSpare() {
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
          <div className="fontHeadNavbar">Monitoring record</div>
          <div className="fontNavbar">ตารางบันทึกการรับประทานอาหาร</div>
        </div>
      </NavBar>
      <div className="monitoringCenter">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div
              type="link"
              onClick={() => {
                setImages(["Monitoring_tutorial.png"]);
                setVisible(true);
              }}
            >
              <div className="monitoringBox1">
                <img
                  src="Monitoring_tutorial_icon.jpg"
                  alt="meepooh"
                  width="80"
                />
                คู่มือการใช้ Monitoring record
              </div>
            </div>
          </Col>

          <Col span={24}>
            <div
              type="link"
              onClick={() => {
                setImages([
                  "monitoring-bulimia-nervosa.png",
                  "monitoring-binge-eating.png"
                ]);
                setVisible(true);
              }}
            >
              <div className="monitoringBox1">
                <img src="Monitoring_ex_icon.jpg" alt="meepooh" width="80" />
                ตัวอย่าง Monitoring record
              </div>
            </div>
          </Col>

          <Col span={24}>
            <div
              type="link"
              onClick={() => {
                setImages(["Monitoring_table.png", "Monitoring-normal.png"]);
                setVisible(true);
              }}
            >
              <div className="monitoringBox1">
                <img src="Monitoring_table_icon.jpg" alt="meepooh" width="80" />
                ตาราง Monitoring record
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <ImageViewer.Multi
        images={images}
        visible={visible}
        defaultIndex={1}
        onClose={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}

import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button, Image } from "antd";
import "./styles.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import { NavBar, ImageViewer } from "antd-mobile";

export function SummarySheetSpare() {
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
          <div className="fontHeadNavbar">Summary sheet</div>
          <div className="fontNavbar">
            บันทึกสรุปการรับประทานอาหารในแต่ละสัปดาห์
          </div>
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
                setImages(["Summary-sheet_tutorial.png"]);
                setVisible(true);
              }}
            >
              <div className="monitoringBox1">
                <img src="Summary_tutorial_icon.jpg" alt="meepooh" width="80" />
                คู่มือการใช้ Summary sheet
              </div>
            </div>
          </Col>

          <Col span={24}>
            <div
              type="link"
              onClick={() => {
                setImages(["Summary-sheet_someone.png"]);
                setVisible(true);
              }}
            >
              <div className="monitoringBox1">
                <img src="Summary_ex_icon.jpg" alt="meepooh" width="80" />
                ตัวอย่าง Summary sheet
              </div>
            </div>
          </Col>

          <Col span={24}>
            <div
              type="link"
              onClick={() => {
                setImages(["Summary-sheet.png", "Summary-sheet-normal.png"]);
                setVisible(true);
              }}
            >
              <div className="monitoringBox1">
                <img src="Summary_table_icon.jpg" alt="meepooh" width="80" />
                ตาราง Summary sheet
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

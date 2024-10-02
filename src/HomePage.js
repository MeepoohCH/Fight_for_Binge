import React, { useState, useEffect } from "react";
import {
  Space,
  Swiper,
  NavBar,
  Tabs,
  Badge,
  Slider,
  ImageViewer
} from "antd-mobile";
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Button, Card, Progress } from "antd";
import { QuestionCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { HeartOutline } from "antd-mobile-icons";
import { useIndexedDB } from "react-indexed-db";
import "./styles.css";
import "./index.css";
import dataJson from "./Part1.json";
import dataJson2 from "./Part2.json";
import dataJson3 from "./Part3.json";

var total = 0;
dataJson.chapters.forEach((chapter) => {
  total = total + chapter.total;
});
dataJson2.chapters.forEach((chapter) => {
  total = total + chapter.total;
});
dataJson3.chapters.forEach((chapter) => {
  total = total + chapter.total;
});
console.log("total=" + total);

export function HomePage(props) {
  const { add, update, getAll } = useIndexedDB("progress");
  const history = useHistory();
  const onSignOut = () => {
    props.onSignOut();
    history.push("/");
  };
  const [rows, setRows] = useState([]);
  const [percentTotal, setPercentTotal] = useState(0);
  useEffect(() => {
    if (rows.length === 0) {
      getAll().then((rows) => {
        if (rows) {
          setRows(rows);
          var progressTotal = 0;
          rows.forEach((progressRow) => {
            // console.log(progressRow);
            progressTotal =
              progressTotal + (progressRow.progress ? progressRow.progress : 0);
          });
          // console.log("progressTotal=" + progressTotal);

          setPercentTotal(Math.ceil((progressTotal / total) * 100));
          // console.log("percentTotal=" + percentTotal);
        }
      });
    }
  }, [rows, getAll]);

  const items = dataJson.chapters.map((row, index) => {
    const progressRow = rows.find(
      (obj) => parseInt(obj.part) === 1 && parseInt(obj.chapter) === row.id
    );
    // console.log(progressRow);
    const progress = progressRow
      ? Math.round((progressRow.progress / progressRow.total) * 100)
      : 0;
    // console.log(progress);
    return (
      <Swiper.Item key={index}>
        <Card
          onClick={() => history.push("/part/1/" + row.id)}
          style={{ background: row.color, marginRight: 20, borderRadius: 20 }}
          className="backgroundImage"
        >
          {row.title} <p className="Space1"> </p>
          <Slider
            disabled
            value={progress}
            style={{ "--fill-color": "#ffb096" }}
            className="my-slider"
            icon={<HeartOutline />}
          />
          <p style={{ textAlign: "right" }}>{progress}%</p>
        </Card>
      </Swiper.Item>
    );
  });

  const items2 = dataJson2.chapters.map((row, index) => {
    const progressRow = rows.find(
      (obj) => parseInt(obj.part) === 2 && parseInt(obj.chapter) === row.id
    );
    const progress = progressRow
      ? Math.round((progressRow.progress / progressRow.total) * 100)
      : 0;
    // console.log(progress);
    return (
      <Swiper.Item key={index}>
        <Card
          onClick={() => history.push("/part/2/" + row.id)}
          style={{ background: row.color, marginRight: 20, borderRadius: 20 }}
          className="backgroundImage"
        >
          {row.title} <p className="Space1"> </p>
          <Slider
            disabled
            value={progress}
            style={{ "--fill-color": "#ffb096" }}
            className="my-slider"
            icon={<HeartOutline />}
          />
          <p style={{ textAlign: "right" }}>{progress}%</p>
        </Card>
      </Swiper.Item>
    );
  });

  const items3 = dataJson3.chapters.map((row, index) => {
    const progressRow = rows.find(
      (obj) => parseInt(obj.part) === 3 && parseInt(obj.chapter) === row.id
    );
    const progress = progressRow
      ? Math.round((progressRow.progress / progressRow.total) * 100)
      : 0;
    return (
      <Swiper.Item key={index}>
        <Card
          onClick={() => history.push("/part/3/" + row.id)}
          style={{ background: row.color, marginRight: 20, borderRadius: 20 }}
          className="backgroundImage"
        >
          {row.title} <p className="Space1"> </p>
          <Slider
            disabled
            value={progress}
            style={{ "--fill-color": "#ffb096" }}
            className="my-slider"
            icon={<HeartOutline />}
          />
          <p style={{ textAlign: "right" }}>{progress}%</p>
        </Card>
      </Swiper.Item>
    );
  });
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(false);
  const onVisibleChange = (value) => {
    setVisible(value);
  };
  return (
    <>
      <Row>
        <Col span={19}>
          <Button className="logoutStyle" type="text" onClick={onSignOut}>
            <LogoutOutlined /> ออกจากระบบ
          </Button>
        </Col>
        <Col span={5}>
          <Button
            className="tutorialStyle"
            type="text"
            onClick={() => {
              setImages(["Tutorial1.png", "Tutorial2.png", "Tutorial3.png"]);
              setVisible(true);
            }}
          >
            <QuestionCircleOutlined />
          </Button>
          <ImageViewer.Multi
            images={images}
            visible={visible}
            defaultIndex={1}
            onClose={() => {
              setVisible(false);
            }}
          />
        </Col>

        <br />
        <Col span={24} className="Space"></Col>
        <Col span={24} className="fontHomepage1">
          Come on, you can do it !!!
        </Col>
        <Col className="progress">
          <Progress
            type="circle"
            strokeColor={{
              "0%": "#ffa7c4",
              "100%": "#fbedc9"
            }}
            percent={percentTotal}
            width={250}
          />
        </Col>
      </Row>
      <div className="homepageBox">
        <Col span={24} className="fontHomepage">
          <Tabs>
            <Tabs.Tab title="Part 1" key="1">
              <Space direction="vertical" block>
                <Swiper
                  slideSize={50}
                  style={{
                    backgroundColor: "white",
                    "--border-radius": "10px"
                  }}
                  indicator={() => null}
                >
                  {items}
                </Swiper>
              </Space>
            </Tabs.Tab>
            <Tabs.Tab title="Part 2" key="2">
              <Space direction="vertical" block>
                <Swiper
                  slideSize={50}
                  style={{
                    backgroundColor: "white",
                    "--border-radius": "10px"
                  }}
                  indicator={() => null}
                >
                  {items2}
                </Swiper>
              </Space>
            </Tabs.Tab>
            <Tabs.Tab title="Part 3" key="3">
              <Space direction="vertical" block>
                <Swiper
                  slideSize={50}
                  style={{
                    backgroundColor: "white",
                    "--border-radius": "10px"
                  }}
                  indicator={() => null}
                >
                  {items3}
                </Swiper>
              </Space>
            </Tabs.Tab>
          </Tabs>
        </Col>
      </div>
      <div className="Space1"> </div>
      <Row className="fontHomepage2">Necessaries</Row>
      <div className="Space1"> </div>
      <Row className="necessaries">
        <Link to="/monitoring_spare" className="homepageBox1">
          <Row className="homepageBox2">
            {" "}
            <Col span={12}>
              <img src="monitoring.jpg" alt="Medicine" width="80" />
            </Col>
            <Col span={12}> Monitoring record </Col>
          </Row>
        </Link>

        <Link to="/summary_sheet_spare" className="homepageBox1">
          <Row className="homepageBox2">
            {" "}
            <Col span={12}>
              <img src="summary.jpg" alt="Medicine" width="80" />
            </Col>
            <Col span={12}> Summary sheet </Col>
          </Row>
        </Link>

        {/* <Link to="/graph" className="homepageBox1">
          <Row className="homepageBox2">
            {" "}
            <Col span={12}>
              <img src="Meepooh.png" alt="Medicine" width="80" />
            </Col>
            <Col span={12}>My graph </Col>
          </Row>
        </Link> */}

        {/* <Link to="/solving_problem_spare" className="homepageBox1">
          <Row className="homepageBox2">
            {" "}
            <Col span={12}>
              <img src="Meepooh.png" alt="Medicine" width="80" />
            </Col>
            <Col span={12}>Solving problem </Col>
          </Row>
        </Link> */}

        <Link to="/body_image_record_spare" className="homepageBox1">
          <Row className="homepageBox2">
            {" "}
            <Col span={12}>
              <img src="body.jpg" alt="Medicine" width="80" />
            </Col>
            <Col span={12}>Body Image Record </Col>
          </Row>
        </Link>
        <Link to="/bmi2" className="homepageBox1">
          <Row className="homepageBox2">
            {" "}
            <Col span={12}>
              <img src="bmi.jpg" alt="Bmi" width="80" />
            </Col>
            <Col span={12}>Bmi </Col>
          </Row>
        </Link>
      </Row>
    </>
  );
}

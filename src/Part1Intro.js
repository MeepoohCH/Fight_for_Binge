import { List, FloatingBubble, Space, Swiper, NavBar } from "antd-mobile";
import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "antd";
import { useHistory } from "react-router-dom";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import { useIntervalWhen } from "rooks";
import { useScrollBy } from "react-use-window-scroll";
import dataJson from "./Part1Intro.json";
import { useIndexedDB } from "react-indexed-db";

const nickname = "Meepooh";

export function Part1Intro() {
  const { add, update, getAll } = useIndexedDB("progress");
  const [state, setState] = useState({});

  const history = useHistory();
  useEffect(() => {
    if (state.chapter === undefined) {
      getAll().then((rows) => {
        if (rows) {
          let i = rows.findIndex(
            (o, index, array) => o.chapter === "Part1Intro"
          );
          if (i >= 0) {
            setState(rows[i]);
            setCount(rows[i].progress);
          }
        }
      });
    }
  });

  const [count, setCount] = useState(0);
  const [autoScroll, setAutoScroll] = useState(false);
  const scrollBy = useScrollBy();
  useIntervalWhen(
    () => {
      scrollBy({ top: 200, left: 0, behaviour: "smooth" });
    },
    2000,
    autoScroll,
    false
  );

  const items = dataJson.Part1Intro.slice(0, count).map((item, index) => {
    if (item.position === "lm") {
      return (
        <Row>
          <Col span={4} style={{ paddingTop: 15 }}>
            <img src="Meepooh.png" alt="Avatar" width={64} />
          </Col>
          <Col span={16} key={index} className="box3 sb14 fontBox">
            {item.content.replace("#nickname", nickname)}
            {item.picture !== undefined && <br />}
            {item.picture !== undefined && (
              <Image
                width={200}
                src={item.picture}
                preview={Image.picture !== undefined}
              />
            )}
          </Col>
        </Row>
      );
    } else if (item.position === "ln") {
      return (
        <Row>
          <Col span={4} style={{ paddingTop: 15 }}>
            <img src="no_name.png" alt="no name" width={64} />
          </Col>
          <Col span={16} key={index} className="box3 sb14 fontBox">
            {item.content.replace("#nickname", nickname)}
            {item.picture !== undefined && <br />}
            {item.picture !== undefined && (
              <Image
                width={200}
                src={item.picture}
                preview={Image.picture !== undefined}
              />
            )}
          </Col>
        </Row>
      );
    } else if (item.position === "re") {
      return (
        <Row style={{ justify: "end" }}>
          <Col span={16} key={index} className="box4 sb13 fontBox">
            {item.content.replace("#nickname", nickname)}
            {item.picture !== undefined && <br />}
            {item.picture !== undefined && (
              <Image
                width={200}
                src={item.picture}
                preview={Image.picture !== undefined}
              />
            )}
          </Col>
          <Col span={4} style={{ paddingTop: 15 }}>
            <img src="Earth.png" alt="Avatar" width={64} />
          </Col>
        </Row>
      );
    } else {
      return (
        <Row style={{ justify: "end" }}>
          <Col span={16} key={index} className="box4 sb13 fontBox">
            {item.content.replace("#nickname", nickname)}
            {item.picture !== undefined && <br />}
            {item.picture !== undefined && (
              <Image
                width={200}
                src={item.picture}
                preview={Image.picture !== undefined}
              />
            )}
          </Col>
          <Col span={4} style={{ paddingTop: 15 }}>
            <img src="no_name.png" alt="Avatar" width={64} />
          </Col>
        </Row>
      );
    }
  });
  const playClick = () => {
    setCount(count + 1);
    scrollBy({ top: 200, left: 0, behaviour: "smooth" });

    let newState = Object.assign({}, state);
    newState.chapter = "Part1Intro";
    newState.progress = count + 1;
    setState(newState);

    if (state.id) {
      update(state).then(
        (successEvent) => {
          console.log("successEvent: ", successEvent);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      add(state).then(
        (key) => {
          console.log("ID Generated: ", key);
          let newState = Object.assign({}, state);
          newState.id = key;
          setState(newState);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  return (
    <div className="backgroundBox ">
      <NavBar className="Navbar" onBack={() => history.goBack()}>
        <div>
          <div className="fontHeadNavbar">Part 1</div>
          <div className="fontNavbar">intro</div>
        </div>
      </NavBar>
      <>
        <FloatingBubble
          style={{
            "--initial-position-bottom": "24px",
            "--initial-position-right": "49%"
          }}
          onClick={playClick}
        >
          {autoScroll ? <PauseOutlined /> : <CaretRightOutlined />}
        </FloatingBubble>
        <Space direction="vertical" block>
          <List style={{ backgroundColor: " #FFEFC0" }}>{items}</List>
        </Space>
      </>
    </div>
  );
}

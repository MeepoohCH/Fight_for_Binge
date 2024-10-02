import { List, FloatingBubble, Space, Swiper, NavBar } from "antd-mobile";
import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import { useIntervalWhen } from "rooks";
import { useScrollBy } from "react-use-window-scroll";
import dataJson from "./Part1Intro.json";
import { useIndexedDB } from "react-indexed-db";
import Part1Json from "./Part1.json";
import Part2Json from "./Part2.json";
import Part3Json from "./Part3.json";
import Part1_0 from "./Part1Intro.json";
import Part1_1 from "./Part1Chapter1.json";
import Part1_2 from "./Part1Chapter2.json";
import Part1_3 from "./Part1Chapter3.json";
import Part2_0 from "./Part2Intro.json";
import Part2_1 from "./Part2Step1.json";
import Part2_2 from "./Part2Step2.json";
import Part2_3 from "./Part2Step3.json";
import Part2_4 from "./Part2Step4.json";
import Part2_5 from "./Part2Step5.json";
import Part3_1 from "./DietModule.json";
import Part3_2 from "./BodyImage.json";
import Part3_3 from "./EndingWell.json";

const nickname = "";

export function PartViewer() {
  const { partid, chapterid } = useParams();
  console.log(partid, chapterid);
  const [data, setData] = useState([]);
  const { add, update, getAll } = useIndexedDB("progress");
  const [state, setState] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (state.chapter === undefined) {
      getAll().then((rows) => {
        if (rows) {
          let i = rows.findIndex(
            (o, index, array) => o.chapter === chapterid && o.part === partid
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
  var chapterTitle = "";

  var chapters = [];
  if (partid == 1) {
    chapters = Part1Json.chapters;
    chapterTitle = chapters[chapterid - 1].title;
  } else if (partid == 2) {
    chapters = Part2Json.chapters;
    chapterTitle = chapters[chapterid - 1].title;
  } else if (partid == 3) {
    chapters = Part3Json.chapters;
    chapterTitle = chapters[chapterid - 1].title;
  }

  var contents = [];
  if (partid == 1 && chapterid == 1) {
    contents = Part1_0.contents;
  } else if (partid == 1 && chapterid == 2) {
    contents = Part1_1.contents;
  } else if (partid == 1 && chapterid == 3) {
    contents = Part1_2.contents;
  } else if (partid == 1 && chapterid == 4) {
    contents = Part1_3.contents;
  } else if (partid == 2 && chapterid == 1) {
    contents = Part2_0.contents;
  } else if (partid == 2 && chapterid == 2) {
    contents = Part2_1.contents;
  } else if (partid == 2 && chapterid == 3) {
    contents = Part2_2.contents;
  } else if (partid == 2 && chapterid == 4) {
    contents = Part2_3.contents;
  } else if (partid == 2 && chapterid == 5) {
    contents = Part2_4.contents;
  } else if (partid == 2 && chapterid == 6) {
    contents = Part2_5.contents;
  } else if (partid == 3 && chapterid == 1) {
    contents = Part3_1.contents;
  } else if (partid == 3 && chapterid == 2) {
    contents = Part3_2.contents;
  } else if (partid == 3 && chapterid == 3) {
    contents = Part3_3.contents;
  }
  //ใส่ต่อๆ 13 chapะer import ด้วย
  const items = contents.slice(0, count).map((item, index) => {
    if (item.position === "lm") {
      return (
        <Row className="backgroundBox">
          <Col span={4} style={{ paddingTop: 15 }}>
            <img src="/Meepooh.png" alt="Avatar" width={64} />
          </Col>
          <Col span={16} key={index} className="box3 sb14 fontBox ">
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
        <Row className="backgroundBox">
          <Col span={4} style={{ paddingTop: 15 }}>
            <img src="/no_name.png" alt="no name" width={64} />
          </Col>
          <Col span={16} key={index} className="box5 sb15 fontBox">
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
        <Row style={{ justify: "end" }} className="backgroundBox">
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
            <img src="/Earth.png" alt="Avatar" width={64} />
          </Col>
        </Row>
      );
    } else {
      return (
        <Row style={{ justify: "end" }} className="backgroundBox">
          <Col span={16} key={index} className="box5 sb16 fontBox">
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
            <img src="/no_name.png" alt="Avatar" width={64} />
          </Col>
        </Row>
      );
    }
  });
  const playClick = () => {
    if (count > contents.length) {
      return;
    }
    setCount(count + 1);
    scrollBy({ top: 200, left: 0, behaviour: "smooth" });

    let newState = Object.assign({}, state);
    newState.part = partid;
    newState.chapter = chapterid;
    newState.progress = count + 1;
    newState.total = contents.length;
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
    <div className="backgroundBox">
      <NavBar className="Navbar" onBack={() => history.goBack()}>
        <div>
          <div className="fontHeadNavbar">Part {partid}</div>
          <div className="fontNavbar">{chapterTitle}</div>
        </div>
      </NavBar>
      <>
        <div className="bottombar" onClick={playClick}>
          ปุ่ม
        </div>{" "}
        <Space direction="vertical" block>
          <List className="ListView">{items}</List>
        </Space>
      </>
    </div>
  );
}

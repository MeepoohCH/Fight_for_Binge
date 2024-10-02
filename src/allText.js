import { List, Card, FloatingBubble, Space, Swiper } from "antd-mobile";
import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import { useIntervalWhen } from "rooks";
import { useScrollBy } from "react-use-window-scroll";

const colors = [
  "red",
  "green",
  "pink",
  "red",
  "green",
  "pink",
  "red",
  "green",
  "pink",
  "red",
  "green",
  "pink",
  "red",
  "green",
  "pink",
  "red",
  "green",
  "pink",
  "red",
  "green",
  "pink",
  "red",
  "green",
  "pink"
];
const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <Card style={{ background: color }}>Chapter{index + 1}</Card>
  </Swiper.Item>
));
export function Part1Intro() {
  const [autoScroll, setAutoScroll] = useState(false);
  const scrollBy = useScrollBy();
  useIntervalWhen(
    () => {
      scrollBy({ top: 200, left: 0, behaviour: "smooth" });
    },
    1000,
    autoScroll,
    false
  );
  return (
    <>
      <FloatingBubble
        style={{
          "--initial-position-bottom": "24px",
          "--initial-position-right": "49%"
        }}
        onClick={() => {
          setAutoScroll(!autoScroll);
        }}
      >
        {autoScroll ? <PauseOutlined /> : <CaretRightOutlined />}
      </FloatingBubble>
      <Space direction="vertical" block>
        <List style={{ backgroundColor: "gray" }}>{items}</List>
      </Space>
    </>
  );
}

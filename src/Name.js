import React, { useState, useEffect } from "react";
import { initDB, useIndexedDB } from "react-indexed-db";
import { useHistory, useParams, Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./styles.css";
import "./index.css";
export function Name() {
  let { id } = useParams();
  const history = useHistory();

  const [state, setState] = useState({ nickname: "" });
  const { add, update } = useIndexedDB("profile");

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    let newState = Object.assign({}, state);
    newState[event.target.name] = event.target.value;
    setState(newState);
  };
  const handleSubmit = (event) => {
    let newState = Object.assign({}, state);

    if (state.id) {
      update(newState).then(
        (successEvent) => {
          console.log("successEvent: ", successEvent);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      add(newState).then(
        (key) => {
          console.log("ID Generated: ", key);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    event.preventDefault();
  };
  const submitNickname = () => {
    if (state.nickname.trim() != "") {
      history.push("/introducing");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="centeredName">
      <div>
        <label>Your nickname !!! : </label>
        <Col span={24} className="Space"></Col>
        <Col span={24} className="Space"></Col>
        <Col span={24}></Col>
        <input
          className="FrontName"
          name="nickname"
          value={state.nickname}
          onChange={handleChange}
          placeholder="ใส่ชื่อเล่นช่องนี้เลยค่า"
        />

        <Col span={24} className="Space"></Col>

        <Button
          type="text"
          htmlType="submit"
          className="buttonName"
          onClick={() => submitNickname()}
        >
          - บันทึก -
        </Button>
      </div>
    </form>
  );
}

import { useHistory, useParams } from "react-router-dom";
import { Row, Col, Button, TimePicker, DatePicker, Input, Image } from "antd";
import "./styles.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";
import { NavBar, Checkbox, Radio } from "antd-mobile";
import moment from "moment";

export function Monitoring() {
  const { id } = useParams();
  const format = "HH:mm";
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const [state, setState] = useState({
    day: moment().format(dateFormatList[0]),
    food: "",
    time: moment().format(format),
    place: "",
    binge: "",
    vomit: "",
    comment: ""
  });
  const history = useHistory();
  const { add, update, getByID } = useIndexedDB("monitoring");

  useEffect(() => {
    console.log(id);
    if (id && state.id == undefined) {
      getByID(id).then((row) => {
        if (row) {
          setState(row);
          console.log(row);
        }
      });
    }
  });

  const handleChange = (event) => {
    let newState = Object.assign({}, state);
    newState[event.target.name] = event.target.value;
    setState(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.id) {
      update(state).then(
        (successEvent) => {
          console.log("successEvent: ", successEvent);
          history.goBack();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      add(state).then(
        (key) => {
          console.log("ID Generated: ", key);
          history.goBack();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };
  const onBingeChange = (binge) => {
    let newState = Object.assign({}, state);
    newState["binge"] = binge;
    setState(newState);
  };
  const onVomitChange = (vomit) => {
    let newState = Object.assign({}, state);
    newState["vomit"] = vomit;
    setState(newState);
  };
  const onDateChange = (date, dateString) => {
    let newState = Object.assign({}, state);
    console.log(dateString);
    newState["day"] = dateString;
    setState(newState);
  };
  const onTimeChange = (time, timeString) => {
    let newState = Object.assign({}, state);
    newState["time"] = timeString;
    setState(newState);
  };
  const { TextArea } = Input;
  return (
    <form onSubmit={handleSubmit}>
      <NavBar className="Navbar" onBack={() => history.goBack()}>
        <div>
          <div className="fontHeadNavbar">Monitoring record</div>
          <div className="fontNavbar">ตารางบันทึกการรับประทานอาหาร</div>
        </div>
      </NavBar>
      <Row className="FrontMonitering">
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={8}>วัน/เดือน/ปี:</Col>
        <Col span={16}>
          <DatePicker
            defaultValue={moment()}
            format={dateFormatList}
            onChange={onDateChange}
          />
        </Col>
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={8}>เวลา:</Col>
        <Col span={16}>
          <TimePicker
            defaultValue={moment()}
            format={format}
            onChange={onTimeChange}
          />
        </Col>
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={8}>อาหารและเครื่องดื่ม:</Col>
        <Col span={16}>
          <TextArea
            rows={4}
            name="food"
            value={state.food}
            onChange={handleChange}
            placeholder="ทานอะไรมาบ้าง"
          />
        </Col>
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={8}>สถานที่:</Col>
        <Col span={16}>
          <input
            name="place"
            value={state.place}
            onChange={handleChange}
            placeholder="สถานที่"
          />
        </Col>
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={24}>คุณเกิดอาการ binge ในมื้อนี้หรือไม่</Col>
        <Col span={24}>
          <Radio.Group value={state.binge} onChange={onBingeChange}>
            <Radio value="*">Binge</Radio>
            <br />
            <Radio value="">ไม่ Binge</Radio>
          </Radio.Group>
        </Col>
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={24}>คุณทำการล้วงคออ้วกหรือใช้ยาระบายหรือไม่</Col>
        <Col span={24}>
          <Radio.Group value={state.vomit} onChange={onVomitChange}>
            <Radio value="V">ใช่ ฉันล้วงคออ้วก</Radio>
            <br />
            <Radio value="L">ใช่ ฉันใช้ยาระบาย</Radio>
            <br />
            <Radio value="V/L">ใช่ ฉันทำทั้งสองอย่าง</Radio>
            <br />
            <Radio value="">ไม่ได้ทำทั้งสองอย่าง</Radio>
          </Radio.Group>
        </Col>
        <Col span={24} className="SpaceStyle"></Col>
        <Col span={8}>ความรู้สึกกับอาหารในมื้อนี้:</Col>
        <Col span={16}>
          <TextArea
            name="comment"
            value={state.comment}
            onChange={handleChange}
            placeholder="ความรู้สึก"
          />
        </Col>
      </Row>
      <Col span={24} className="SpaceStyle"></Col>
      <div>
        <Button type="default" htmlType="submit" className="submitMonitoring">
          บันทึก
        </Button>
      </div>
    </form>
  );
}

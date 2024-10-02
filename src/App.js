import "./styles.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import config from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { Title } from "./Title";
import { Register } from "./Register";
import { Name } from "./Name";
import { Form } from "./Form";
import { Introducing } from "./Introducing";
import { Total } from "./Total";
import { Caution0 } from "./Caution0";
import { Caution1 } from "./Caution1";
import { Caution2 } from "./Caution2";
import { Caution3 } from "./Caution3";
import { Caution4 } from "./Caution4";
import { Caution5 } from "./Caution5";
import { Caution6 } from "./Caution6";
import { HomePage } from "./HomePage";
import { Bmi } from "./Bmi";
import { Bmi2 } from "./Bmi2";
import { Tutorial } from "./Tutorial";

import { PartViewer } from "./PartViewer";

import { MonitoringSpare } from "./MonitoringSpare";
import { SummarySheetSpare } from "./SummarySheetSpare";
import { Graph } from "./Graph";
import { SolvingProblemSpare } from "./SolvingProblemSpare";
import { BodyImageRecordSpare } from "./BodyImageRecordSpare";
import { DBConfig } from "./DBConfig";
import { initDB, useIndexedDB } from "react-indexed-db";
initDB(DBConfig);

// Setup firebase app globally.
const app = initializeApp(config);
const auth = getAuth(app);

export default function App() {
  const history = useHistory();
  const loadToken = () => {
    const tokenStr = localStorage.getItem("token");
    if (tokenStr) {
      const userToken = JSON.parse(tokenStr);
      return userToken;
    } else {
      return undefined;
    }
  };
  const saveToken = (userToken) => {
    if (userToken) {
      const tokenJson = JSON.stringify(userToken);
      localStorage.setItem("token", tokenJson);
      setUser(userToken);
    } else {
      localStorage.removeItem("token");
      setUser(undefined);
    }
  };

  const [user, setUser] = useState(loadToken());

  const handleSignOut = (event) => {
    signOut(auth).then(() => {
      saveToken(undefined);
    });
  };

  if (user) {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Title user={user} />
          </Route>
          <Route path="/name">
            <Name />
          </Route>
          <Route path="/introducing">
            <Introducing />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/total">
            <Total />
          </Route>
          <Route path="/caution0">
            <Caution0 />
          </Route>
          <Route path="/caution1">
            <Caution1 />
          </Route>
          <Route path="/caution2">
            <Caution2 />
          </Route>
          <Route path="/caution3">
            <Caution3 />
          </Route>
          <Route path="/caution4">
            <Caution4 />
          </Route>
          <Route path="/caution5">
            <Caution5 />
          </Route>
          <Route path="/caution6">
            <Caution6 />
          </Route>
          <Route path="/home">
            <HomePage onSignOut={handleSignOut} />
          </Route>
          <Route path="/bmi">
            <Bmi />
          </Route>
          <Route path="/bmi2">
            <Bmi2 />
          </Route>
          <Route path="/tutorial">
            <Tutorial />
          </Route>
          <Route
            path="/part/:partid/:chapterid"
            children={<PartViewer />}
          ></Route>
          {/* <Route path="/part1_chapter1">
            <Part1Chapter1 />
          </Route>
          <Route path="/part1_chapter2">
            <Part1Chapter2 />
          </Route>
          <Route path="/part1_chapter3">
            <Part1Chapter3 />
          </Route>
          <Route path="/part2_intro">
            <Part2Intro />
          </Route>
          <Route path="/part2_step1">
            <Part2Step1 />
          </Route>
          <Route path="/part2_step2">
            <Part2Step2 />
          </Route>
          <Route path="/part2_step3">
            <Part2Step3 />
          </Route>
          <Route path="/part2_step4">
            <Part2Step4 />
          </Route>
          <Route path="/part2_step5">
            <Part2Step5 />
          </Route>
          <Route path="/diet_module">
            <DietModule />
          </Route>
          <Route path="/body_image">
            <BodyImage />
          </Route>
          <Route path="/ending">
            <EndingWell />
          </Route> */}
          {/* <Route path="/monitoring/:id" children={<Monitoring />} />
          <Route path="/monitoringtable">
            <MonitoringTable />
          </Route>
          <Route path="/monitoringlist">
            <MonitoringList />
          </Route> */}
          <Route path="/monitoring_spare">
            <MonitoringSpare />
          </Route>
          <Route path="/summary_sheet_spare">
            <SummarySheetSpare />
          </Route>
          <Route path="/graph">
            <Graph />
          </Route>
          <Route path="/solving_problem_spare">
            <SolvingProblemSpare />
          </Route>
          <Route path="/body_image_record_spare">
            <BodyImageRecordSpare />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Title user={user} />
          </Route>
          <Route path="/register">
            <Register auth={auth} onUserChange={saveToken} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

import React, { useState } from "react";
import "./App.css";
import { Box, Button } from "@mui/material";
import { Lesson_0 } from "./lessons/Lesson_0";
import { Lesson_1 } from "./lessons/Lesson_1";
import { Lesson_2 } from "./lessons/Lesson_2";
import { Lesson_3 } from "./lessons/Lesson_3";
import { Lesson_4 } from "./lessons/Lesson_4";
import { Lesson_5 } from "./lessons/Lesson_5";
import { Lesson_6 } from "./lessons/Lesson_6";
import { Lesson_7 } from "./lessons/Lesson_7";
import { Lesson_8 } from "./lessons/Lesson_8";
import { Lesson_9 } from "./lessons/Lesson_9";
import { Lesson_10 } from "./lessons/Lesson_10";

import {
  lesson_0_interface,
  lesson_10_interface,
  lesson_1_interface,
  lesson_2_interface,
  lesson_3_interface,
  lesson_4_interface,
  lesson_5_interface,
  lesson_6_interface,
  lesson_7_interface,
  lesson_8_interface,
  lesson_9_interface,
  finale,
} from "./types";
import Finale from "./lessons/Finale";

function App() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [buttonActive, setButtonActive] = useState<boolean>(true);

  const [lesson_0, setLesson_0] = useState<lesson_0_interface>({
    sex: "I",
    birth: 2010,
    dalt: false,
    adhd: false,
    tired: false,
    dys: false,
    eye: "Brak",
    clause: false,
  });

  const [lesson_1, setLesson_1] = useState<lesson_1_interface>({
    time: 0,
    falseTry: 0,
    isFind: false,
  });

  const [lesson_2, setLesson_2] = useState<lesson_2_interface>({
    time: 0,
    falseTry: 0,
    isFind: false,
  });

  const [lesson_3, setLesson_3] = useState<lesson_3_interface>({
    duration: -1,
    tones: 0,
  });

  const [lesson_4, setLesson_4] = useState<lesson_4_interface>({
    time: 0,
    second: 0,
  });

  const [lesson_5, setLesson_5] = useState<lesson_5_interface>({
    time: 0,
    second: 0,
    zoom: 1,
    position: 500,
  });

  const [lesson_6, setLesson_6] = useState<lesson_6_interface>({
    time: 0,
    second: 0,
  });

  const [lesson_7, setLesson_7] = useState<lesson_7_interface>({
    time: 0,
    second: 0,
    zoom: 1,
    position: 500,
  });

  const [lesson_8, setLesson_8] = useState<lesson_8_interface>({
    isCorrect: false,
    falseTry: -2,
    time: 0,
  });

  const [lesson_9, setLesson_9] = useState<lesson_9_interface>({
    isCorrect: false,
    falseTry: -2,
    time: 0,
  });

  const [lesson_10, setLesson_10] = useState<lesson_10_interface>({
    selected: 0,
  });

  function renderLesson() {
    switch (currentLesson) {
      case 0:
        return <Lesson_0 lesson_0={lesson_0} setLesson_0={setLesson_0} />;
      case 1:
        return <Lesson_1 lesson_1={lesson_1} setLesson_1={setLesson_1} />;
      case 2:
        return <Lesson_2 lesson_2={lesson_2} setLesson_2={setLesson_2} />;
      case 3:
        return <Lesson_3 lesson_3={lesson_3} setLesson_3={setLesson_3} />;
      case 4:
        return <Lesson_4 lesson_4={lesson_4} setLesson_4={setLesson_4} />;
      case 5:
        return <Lesson_5 lesson_5={lesson_5} setLesson_5={setLesson_5} />;
      case 6:
        return <Lesson_6 lesson_6={lesson_6} setLesson_6={setLesson_6} />;
      case 7:
        return <Lesson_7 lesson_7={lesson_7} setLesson_7={setLesson_7} />;
      case 8:
        return <Lesson_8 lesson_8={lesson_8} setLesson_8={setLesson_8} />;
      case 9:
        return <Lesson_9 lesson_9={lesson_9} setLesson_9={setLesson_9} />;
      case 10:
        return <Lesson_10 lesson_10={lesson_10} setLesson_10={setLesson_10} />;
      case 11:
        const finale:finale = {
          lesson_0:lesson_0,
          lesson_1:lesson_1,
          lesson_2:lesson_2,
          lesson_3:lesson_3,
          lesson_4:lesson_4,
          lesson_5:lesson_5,
          lesson_6:lesson_6,
          lesson_7:lesson_7,
          lesson_8:lesson_8,
          lesson_9:lesson_9,
          lesson_10:lesson_10,
        }
        return <Finale finale={finale}/>
      default:
        return <div>Error 404: No lesson found</div>;
    }
  }

  function handleNext() {
    if (currentLesson === 0) {
      if (lesson_0.clause) {
        setCurrentLesson(1);
        console.log(lesson_0);
      } else alert("Brak zgody na przetwarzanie danych");
    } else if (currentLesson === 1) {
      if (lesson_1.isFind) {
        setCurrentLesson(2);
        console.log(lesson_1);
      } else alert('Nie wcisnęłeś (-aś) przycisku "anuluj"');
    } else if (currentLesson === 2) {
      if (lesson_2.isFind) {
        setCurrentLesson(3);
        console.log(lesson_2);
      } else alert('Nie wcisnęłeś (-aś) przycisku "anuluj"');
    } else if (currentLesson === 3) {
      if (lesson_3.duration > 0 && lesson_3.tones > 0) {
        setCurrentLesson(4);
        console.log(lesson_3);
      } else alert("Upewnij się, że wpisałeś liczbę tonów i zmieniłeś slider");
    } else if (currentLesson === 4) {
      if (lesson_4.second > 0) {
        setCurrentLesson(5);
        console.log(lesson_4);
      } else alert("Upewnij się, że wpisałeś sekundę");
    } else if (currentLesson === 5) {
      if (lesson_5.second > 0 && lesson_5.zoom > 1) {
        setCurrentLesson(6);
        console.log(lesson_5);
      } else alert("Upewnij się, że wpisałeś sekundę i pobawiłeś się zoomem");
    } else if (currentLesson === 6) {
      if (lesson_6.second > 0) {
        setCurrentLesson(7);
        console.log(lesson_6);
      } else alert("Upewnij się, że wpisałeś sekundę");
    } else if (currentLesson === 7) {
      if (lesson_7.second > 0 && lesson_7.zoom > 1) {
        setCurrentLesson(8);
        console.log(lesson_7);
      } else alert("Upewnij się, że wpisałeś sekundę i pobawiłeś się zoomem");
    } else if (currentLesson === 8) {
      if (lesson_8.isCorrect) {
        setCurrentLesson(9);
        console.log(lesson_8);
      } else alert("Upewnij się, że zaznaczyłeś poprawnie przyciski");
    } else if (currentLesson === 9) {
      if (lesson_9.isCorrect) {
        setCurrentLesson(10);
        console.log(lesson_9);
      } else alert("Upewnij się, że zaznaczyłeś poprawnie przyciski");
    } else if (currentLesson === 10) {
      if (lesson_10.selected > 0 && lesson_10.selected <= 4) {
        setCurrentLesson(11);
        console.log(lesson_10);
        setButtonActive(false);
      } else alert("Upewnij się, że wybrałeś wykres");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#282c34",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderLesson()}
        <Button
          sx={{ marginTop: 2, marginLeft: 70, display: buttonActive?"block":"none" }}
          variant="contained"
          onClick={handleNext}
        
        >
          Next
        </Button>
      </Box>
    </div>
  );
}

export default App;

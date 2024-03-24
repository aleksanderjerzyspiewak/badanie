import { TreeItem, TreeView } from "@mui/x-tree-view";
import React, { useEffect, useRef, useState } from "react";
import { finale } from "../types";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "OTmA8IIq7";

interface finaleProps {
  finale: finale;
}


function LessonsTree({ finale }: finaleProps) {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const formData = {
    sex: finale.lesson_0.sex,
    birth: finale.lesson_0.birth,
    dalt: finale.lesson_0.dalt,
    adhd: finale.lesson_0.adhd,
    tired: finale.lesson_0.tired,
    dys: finale.lesson_0.dys,
    eye: finale.lesson_0.eye,
    clause: finale.lesson_0.clause,
    lesson_1_time: finale.lesson_1.time,
    lesson_1_falseTry: finale.lesson_1.falseTry,
    lesson_1_isFind: finale.lesson_1.isFind,
    lesson_2_time: finale.lesson_2.time,
    lesson_2_falseTry: finale.lesson_2.falseTry,
    lesson_2_isFind: finale.lesson_2.isFind,
    lesson_3_duration: finale.lesson_3.duration,
    lesson_3_tones: finale.lesson_3.tones,
    lesson_4_time: finale.lesson_4.time,
    lesson_4_second: finale.lesson_4.second,
    lesson_5_time: finale.lesson_5.time,
    lesson_5_second: finale.lesson_5.second,
    lesson_5_zoom: finale.lesson_5.zoom,
    lesson_5_position: finale.lesson_5.position,
    lesson_6_time: finale.lesson_6.time,
    lesson_6_second: finale.lesson_6.second,
    lesson_7_time: finale.lesson_7.time,
    lesson_7_second: finale.lesson_7.second,
    lesson_7_zoom: finale.lesson_7.zoom,
    lesson_7_position: finale.lesson_7.position,
    lesson_8_isCorrect: finale.lesson_8.isCorrect,
    lesson_8_falseTry: finale.lesson_8.falseTry,
    lesson_8_time: finale.lesson_8.time,
    lesson_9_isCorrect: finale.lesson_9.isCorrect,
    lesson_9_falseTry: finale.lesson_9.falseTry,
    lesson_9_time: finale.lesson_9.time,
    lesson_10_selected: finale.lesson_10.selected
  };

  const sendToFormspark = async () => {
    try {
      const response = await fetch('https://submit-form.com/OTmA8IIq7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
    }
    console.log("Wysyłanie trwa formspark");
    
  };

  // useEffect(() => {
  //   if (!dataSent) {
  //     sendToFormspark();
  //     console.log("Wysyłanie trwa");
  //     setDataSent(true);
  //     alert("alert");
  //   }
  // }, [dataSent]);

  const operationDoneRef = useRef(false);

  useEffect(() => {
    if (!operationDoneRef.current) {
      console.log("Operacja wykonuje się.");
      sendToFormspark();
      operationDoneRef.current = true; 
    }
  }, []);

  return (
    <TreeView
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        borderRadius: "15px",
        p: 4,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "auto",
        "& > *": {
          margin: "8px !important",
        },
        flexWrap: "wrap",
        maxHeight: "580px",
        overflowY: "auto",
      }}
      expanded={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
    >
      
      <TreeItem nodeId="0" label="Lesson 0">
        <TreeItem nodeId="0-1" label={`Płeć: ${finale.lesson_0.sex}`} />
        <TreeItem
          nodeId="0-2"
          label={`Rok urodzenia: ${finale.lesson_0.birth}`}
        />
        <TreeItem
          nodeId="0-3"
          label={`Daltonizm: ${finale.lesson_0.dalt ? "Tak" : "Nie"}`}
        />
        <TreeItem
          nodeId="0-4"
          label={`ADHD: ${finale.lesson_0.adhd ? "Tak" : "Nie"}`}
        />
        <TreeItem
          nodeId="0-5"
          label={`Zmęczony: ${finale.lesson_0.tired ? "Tak" : "Nie"}`}
        />
        <TreeItem
          nodeId="0-6"
          label={`Dysleksja: ${finale.lesson_0.dys ? "Tak" : "Nie"}`}
        />
        <TreeItem nodeId="0-7" label={`Wada wzroku: ${finale.lesson_0.eye}`} />
        <TreeItem
          nodeId="0-8"
          label={`Klauzula: ${finale.lesson_0.clause ? "Tak" : "Nie"}`}
        />
      </TreeItem>
      <TreeItem nodeId="1" label="Lesson 1">
        <TreeItem nodeId="1-1" label={`Czas: ${finale.lesson_1.time}`} />
        <TreeItem
          nodeId="1-2"
          label={`Nieudane próby: ${finale.lesson_1.falseTry}`}
        />
        <TreeItem
          nodeId="1-3"
          label={`Znaleziono: ${finale.lesson_1.isFind ? "Tak" : "Nie"}`}
        />
      </TreeItem>
      <TreeItem nodeId="2" label="Lesson 2">
        <TreeItem nodeId="2-1" label={`Czas: ${finale.lesson_2.time}`} />
        <TreeItem
          nodeId="2-2"
          label={`Nieudane próby: ${finale.lesson_2.falseTry}`}
        />
        <TreeItem
          nodeId="2-3"
          label={`Znaleziono: ${finale.lesson_2.isFind ? "Tak" : "Nie"}`}
        />
      </TreeItem>
      <TreeItem nodeId="3" label="Lesson 3">
        <TreeItem
          nodeId="3-1"
          label={`Czas trwania: ${finale.lesson_3.duration}`}
        />
        <TreeItem nodeId="3-2" label={`Tony: ${finale.lesson_3.tones}`} />
      </TreeItem>
      <TreeItem nodeId="4" label="Lesson 4">
        <TreeItem nodeId="4-1" label={`Czas: ${finale.lesson_4.time}`} />
        <TreeItem nodeId="4-2" label={`Sekunda: ${finale.lesson_4.second}`} />
      </TreeItem>
      <TreeItem nodeId="5" label="Lesson 5">
        <TreeItem nodeId="5-1" label={`Czas: ${finale.lesson_5.time}`} />
        <TreeItem nodeId="5-2" label={`Sekunda: ${finale.lesson_5.second}`} />
        <TreeItem
          nodeId="5-3"
          label={`Powiększenie: ${finale.lesson_5.zoom}`}
        />
        <TreeItem nodeId="5-4" label={`Pozycja: ${finale.lesson_5.position}`} />
      </TreeItem>
      <TreeItem nodeId="6" label="Lesson 6">
        <TreeItem nodeId="6-1" label={`Czas: ${finale.lesson_6.time}`} />
        <TreeItem nodeId="6-2" label={`Sekunda: ${finale.lesson_6.second}`} />
      </TreeItem>
      <TreeItem nodeId="7" label="Lesson 7">
        <TreeItem nodeId="7-1" label={`Czas: ${finale.lesson_7.time}`} />
        <TreeItem nodeId="7-2" label={`Sekunda: ${finale.lesson_7.second}`} />
        <TreeItem
          nodeId="7-3"
          label={`Powiększenie: ${finale.lesson_7.zoom}`}
        />
        <TreeItem nodeId="7-4" label={`Pozycja: ${finale.lesson_7.position}`} />
      </TreeItem>
      <TreeItem nodeId="8" label="Lesson 8">
        <TreeItem
          nodeId="8-1"
          label={`Poprawne: ${finale.lesson_8.isCorrect ? "Tak" : "Nie"}`}
        />
        <TreeItem
          nodeId="8-2"
          label={`Nieudane próby: ${finale.lesson_8.falseTry}`}
        />
        <TreeItem nodeId="8-3" label={`Czas: ${finale.lesson_8.time}`} />
      </TreeItem>
      <TreeItem nodeId="9" label="Lesson 9">
        <TreeItem
          nodeId="9-1"
          label={`Poprawne: ${finale.lesson_9.isCorrect ? "Tak" : "Nie"}`}
        />
        <TreeItem
          nodeId="9-2"
          label={`Nieudane próby: ${finale.lesson_9.falseTry}`}
        />
        <TreeItem nodeId="9-3" label={`Czas: ${finale.lesson_9.time}`} />
      </TreeItem>
      <TreeItem nodeId="10" label="Lesson 10">
        <TreeItem
          nodeId="10-1"
          label={`Wybrane: ${finale.lesson_10.selected}`}
        />
      </TreeItem>
    </TreeView>
  );
}

export default LessonsTree;



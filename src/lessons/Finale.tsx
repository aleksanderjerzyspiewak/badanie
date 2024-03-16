import { TreeItem, TreeView } from "@mui/x-tree-view";
import React from "react";
import { finale } from "../types";

interface finaleProps {
  finale: finale;
}

function LessonsTree({ finale }: finaleProps) {
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
      expanded={['0','1','2','3','4','5','6','7','8','9','10']}
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

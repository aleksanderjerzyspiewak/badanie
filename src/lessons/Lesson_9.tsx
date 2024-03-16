import { Box, Button, Typography } from "@mui/material";
import { lesson_9_interface } from "../types";
import { useEffect, useState } from "react";

const whiteKeyHeight = "28px";
const blackKeyHeight = "20px";
const whiteKeyWidth = "100px";
const blackKeyWidth = "60px";

const pianoKeys: { note: string; octave: number; black: boolean }[] = [];
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

for (let octave = 0; octave < 8; octave++) {
  notes.forEach((note) => {
    const isBlack = note.includes("#");
    pianoKeys.push({ note: `${note}${octave}`, octave, black: isBlack });
  });
}

pianoKeys.shift();
pianoKeys.shift();

pianoKeys.unshift({ note: "B0", octave: 0, black: false });
pianoKeys.unshift({ note: "A#0", octave: 0, black: true });
pianoKeys.unshift({ note: "A0", octave: 0, black: false });

while (pianoKeys.length > 88) {
  pianoKeys.pop();
}

interface Lesson_9Props {
  lesson_9: lesson_9_interface;
  setLesson_9: React.Dispatch<React.SetStateAction<lesson_9_interface>>;
}

export function Lesson_9({ lesson_9, setLesson_9 }: Lesson_9Props) {
  const [startTime, setStartTime] = useState<Date | null>(null);
  useEffect(() => {
    setStartTime(new Date());
  }, []);

  const correctButtons = ["C4", "A1", "B3"];
  const [clickedButtons, setClickedButtons] = useState<string[]>([]);

  const handleButtonClick = (note: string) => {
    if (!clickedButtons.includes(note)) {
      setClickedButtons([...clickedButtons, note]);
    }
    const allCorrectButtonsClicked = correctButtons.every(
      (correctButton) =>
        clickedButtons.includes(correctButton) || correctButton === note
    );

    if (allCorrectButtonsClicked) {
      setLesson_9((prevState) => ({
        ...prevState,
        isCorrect: true,
      }));
      if (startTime) {
        const endTime = new Date();
        const timeDiff = endTime.getTime() - startTime.getTime();
        const seconds = timeDiff / 1000;
        setLesson_9((prevState) => ({ ...prevState, time: seconds }));
      }
    } else {
      setLesson_9((prevState) => ({
        ...prevState,
        falseTry: prevState.falseTry + 1,
      }));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        borderRadius: "15px",
        p: 4,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "900px",
        maxHeight: "800px",
        margin: "auto",
        "& > *": {
          margin: "8px !important",
        },
        flexWrap: "wrap",
      }}
    >
      <Typography variant="body1">Kliknij C4, A1, B3</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "left",
          borderRadius: "0px",
          maxWidth: "200px",
          height: "740px",
          overflow: "auto",
        }}>
          {pianoKeys.map((key, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(key.note)}
              sx={{
                height: key.black ? blackKeyHeight : whiteKeyHeight,
                width: key.black ? blackKeyWidth : whiteKeyWidth,
                backgroundColor: clickedButtons.includes(key.note)
                  ? correctButtons.includes(key.note)
                    ? "green"
                    : "red"
                  : key.black
                  ? "black"
                  : "white",
                color: key.black ? "white" : "black",
                marginLeft: key.black ? "35px" : "0px",
              }}
            >
              {key.note}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

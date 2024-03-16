import { Box, Button, Typography } from "@mui/material";
import { lesson_8_interface } from "../types";
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

const segmentSize = Math.ceil(pianoKeys.length / 3);
const segments = [0, 1, 2].map((i) =>
  pianoKeys.slice(i * segmentSize, (i + 1) * segmentSize)
);

interface Lesson_8Props {
  lesson_8: lesson_8_interface;
  setLesson_8: React.Dispatch<React.SetStateAction<lesson_8_interface>>;
}
export function Lesson_8({ lesson_8, setLesson_8 }: Lesson_8Props) {
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
      setLesson_8((prevState) => ({
        ...prevState,
        isCorrect: true,
      }));
      if (startTime) {
        const endTime = new Date();
        const timeDiff = endTime.getTime() - startTime.getTime();
        const seconds = timeDiff / 1000;
        setLesson_8((prevState) => ({ ...prevState, time: seconds }));
      }
    } else {
      setLesson_8((prevState) => ({
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
        maxWidth: "800px",
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
        {segments.map((segment, segmentIndex) => (
          <Box
            key={segmentIndex}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "left",
              borderRadius: "0px",
              maxWidth: "200px",
              height: "750px",
              mr: segmentIndex < segments.length - 1 ? 2 : 0, // Adjust the value '2' to control the margin size
            }}
          >
            {segment.map((key, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(key.note)}
                sx={{
                  height: key.black ? blackKeyHeight : whiteKeyHeight,
                  width: key.black ? blackKeyWidth : whiteKeyWidth,
                  backgroundColor: clickedButtons.includes(key.note)? (correctButtons.includes(key.note)? "green" : "red"): (key.black ? "black" : "white"),
                  color: key.black ? "white" : "black",
                  marginLeft: key.black ? "35px" : "0px",
                }}
              >
                {key.note}
              </Button>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { lesson_1_interface } from "../types";

interface Button {
  id: number | string;
  label: string;
}

interface Lesson_1Props {
  lesson_1: lesson_1_interface;
  setLesson_1: React.Dispatch<React.SetStateAction<lesson_1_interface>>;
}

export function Lesson_1({ lesson_1, setLesson_1 }: Lesson_1Props) {
  const [buttons, setButtons] = useState<Button[]>([]);

  const [startTime, setStartTime] = useState<Date | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const generateSimilarWords = (word: string, count: number): string[] => {
      let words = new Set<string>();
      while (words.size < count) {
        let shuffled = word
          .split("")
          .sort(() => 0.5 - Math.random())
          .join("");
        if (shuffled !== word) words.add(shuffled);
      }
      return Array.from(words);
    };

    const baseWord = "Anuluj";
    let similarWords = generateSimilarWords(baseWord, 47); // Generate 49 variations
    similarWords.splice(
      Math.floor(Math.random() * similarWords.length),
      0,
      baseWord
    ); // Insert "Anuluj" at random position

    const tempButtons: Button[] = similarWords.map((label, index) => ({
      id: index,
      label,
    }));

    setButtons(tempButtons);
    setStartTime(new Date());
    setDuration(null);
  }, []);

  const handleClick = (label: string) => {
    if (label === "Anuluj") {
      console.log("Correctly clicked Anuluj");
      setLesson_1({ ...lesson_1, isFind: true });
      if (startTime) {
        const endTime = new Date();
        const timeDiff = endTime.getTime() - startTime.getTime(); // in ms
        const seconds = timeDiff / 1000; // convert to seconds
        setDuration(seconds);
        console.log(`Time taken: ${seconds} seconds`);
        setLesson_1(prevState => ({ ...prevState, time: seconds }));
      }
    } else{
      setLesson_1(prevState => ({
        ...prevState,
        falseTry: prevState.falseTry + 1
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
      <Typography variant="body1">Znajdź przycisk Anuluj</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: 600, // Adjust based on your preference
          p: 2,
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "auto",
          "&::after": {
            content: '""',
            width: "50%", // Adjust based on your button size to force wrapping in a way that creates staggered rows
          },
        }}
      >
        {buttons.map((button, index) => (
          <Button
            variant={
              lesson_1.isFind && button.label === "Anuluj"
                ? "contained"
                : "outlined"
            }
            key={button.id.toString()}
            onClick={() => handleClick(button.label)}
            sx={{
              m: 1,
              // Apply staggered offset for even rows
              transform: index % 2 === 0 ? "translateX(10%)" : "none",
            }}
          >
            {button.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

import { Box, TextField, Typography } from "@mui/material";
import data from "../components/data2.json";
import { ChartContainer, ChartsXAxis, LinePlot } from "@mui/x-charts";
import { lesson_4_interface } from "../types";
import { useEffect, useState } from "react";

interface Lesson_4Props {
  lesson_4: lesson_4_interface;
  setLesson_4: React.Dispatch<React.SetStateAction<lesson_4_interface>>;
}

export function Lesson_4({ lesson_4, setLesson_4 }: Lesson_4Props) {
  const [startTime, setStartTime] = useState<Date | null>(null);
  useEffect(() => {
    setStartTime(new Date());
  }, []);
  const numbers = data.numbers;
  const indexes = numbers.map((_, index) => index);

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setLesson_4({ ...lesson_4, second: newValue });
    if (startTime) {
      const endTime = new Date();
      const timeDiff = endTime.getTime() - startTime.getTime();
      const seconds = timeDiff / 1000;
      setLesson_4((prevState) => ({ ...prevState, time: seconds }));
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
      <Typography variant="body1">
        W której sekundzie pojawił się najgłośniejszy dźwięk? {"Np: 11.1323"}
      </Typography>
      <ChartContainer
        width={600}
        height={350}
        series={[{ type: "line", data: numbers }]}
        xAxis={[{ scaleType: "point", data: indexes }]}
        yAxis={[{ min: -2, max: 12 }]}
        disableAxisListener
      >
        <LinePlot />
        <ChartsXAxis position="top" />
      </ChartContainer>
      <TextField
        sx={{ marginLeft: "10px" }}
        id="outlined-number"
        label="Number"
        type="number"
        onChange={handleNumberChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}

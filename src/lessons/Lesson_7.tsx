import { Box, Slider, TextField, Typography } from "@mui/material";
import data from "../components/data3.json";
import { ChartContainer, ChartsXAxis, LinePlot } from "@mui/x-charts";
import { lesson_7_interface } from "../types";
import { useEffect, useState } from "react";
import { start } from "repl";

interface Lesson_7Props {
  lesson_7: lesson_7_interface;
  setLesson_7: React.Dispatch<React.SetStateAction<lesson_7_interface>>;
}

export function Lesson_7({ lesson_7, setLesson_7 }: Lesson_7Props) {
  const [startTime, setStartTime] = useState<Date | null>(null);
  useEffect(() => {
    setStartTime(new Date());
  }, []);
  const numbers = data.numbers;
  const indexes = numbers.map((_, index) => index);

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setLesson_7({ ...lesson_7, second: newValue });
    if (startTime) {
      const endTime = new Date();
      const timeDiff = endTime.getTime() - startTime.getTime();
      const seconds = timeDiff / 1000;
      setLesson_7((prevState) => ({ ...prevState, time: seconds }));
    }
  };

  const [position, setPosition] = useState<{ start: number; end: number }>({
    start: 0,
    end: numbers.length,
  });

  useEffect(() => {
    handlePosition();
  }, [lesson_7.zoom, lesson_7.position]);

  function handlePosition() {
    const ownZoom = lesson_7.zoom / 2;
    const dataAtOnce = Math.floor(numbers.length / ownZoom);
    const centerPosition = Math.floor(
      (numbers.length * lesson_7.position) / 1000
    );
    let start = Math.max(centerPosition - Math.floor(dataAtOnce / 2), 0);
    let end = Math.min(
      centerPosition + Math.floor(dataAtOnce / 2),
      numbers.length
    );
    setPosition({ start, end });
  }

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
        W której sekundzie pojawił się najgłośniejszy dźwięk? {"(Np: 11.1323)"}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <ChartContainer
          width={600}
          height={350}
          series={[
            {
              type: "line",
              data: numbers.slice(position?.start, position?.end),
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: indexes.slice(position?.start, position?.end),
            },
          ]}
          yAxis={[{ min: -2, max: 12 }]}
          disableAxisListener
        >
          <LinePlot />
          <ChartsXAxis position="top" />
        </ChartContainer>
        <Slider
          sx={{ height: 200 }}
          orientation="vertical"
          value={lesson_7.zoom}
          valueLabelDisplay="auto"
          min={1}
          onChange={(event, newValue) => {
            setLesson_7({ ...lesson_7, zoom: newValue as number });
            handlePosition();
          }}
        />
      </Box>
      <Slider
        value={lesson_7.position}
        max={1000}
        valueLabelDisplay="off"
        onChange={(event, newValue) => {
          setLesson_7({ ...lesson_7, position: newValue as number });
          handlePosition();
        }}
      />
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

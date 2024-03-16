import {
  Box,
  Button,
  Slider,
  TextField,
  Typography,
  duration,
} from "@mui/material";
import { ChartContainer, LinePlot } from "@mui/x-charts";
import rawData from "../components/data.json";
import { SetStateAction, useMemo, useState } from "react";
import { lesson_3_interface } from "../types";

interface Lesson_3Props {
  lesson_3: lesson_3_interface;
  setLesson_3: React.Dispatch<React.SetStateAction<lesson_3_interface>>;
}

export function Lesson_3({ lesson_3, setLesson_3 }: Lesson_3Props) {
  const [sampleRate, setSampleRate] = useState(5000);

  const { sampledData, xLabels } = useMemo(() => {
    const sampledData = rawData.numbers.filter(
      (_, index) => index % sampleRate === 0
    );
    const xLabels = sampledData.map((_, index) => index * sampleRate + 1);
    return { sampledData, xLabels };
  }, [sampleRate]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSampleRate(newValue as number);
    setLesson_3({ ...lesson_3, duration: newValue as number });
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
        Ustaw slider w momencie, w którym zauważysz ilość następujących po sobie
        dźwięków
      </Typography>
      <ChartContainer
        width={700}
        height={400}
        series={[{ type: "line", data: sampledData }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[{ min: -5000, max: 5000 }]}
        disableAxisListener
      >
        <LinePlot />
      </ChartContainer>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          onClick={() => {
            setSampleRate((prevRate) => Math.max(6, prevRate - 1));
            setLesson_3({ ...lesson_3, duration: sampleRate as number });
          }}
        >
          {"<--"}
        </Button>
        {sampleRate}
        <Button
          onClick={() => {
            setSampleRate((prevRate) => Math.min(1000, prevRate + 1));
            setLesson_3({ ...lesson_3, duration: sampleRate as number });
          }}
        >
          {"->"}
        </Button>
      </Box>
      <Slider
        defaultValue={5000}
        min={6}
        max={5000}
        value={sampleRate}
        aria-label="Sample Rate"
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
      />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="body1">Ile ich jest?</Typography>
        <TextField
          sx={{ marginLeft: "10px" }}
          id="outlined-number"
          label="Number"
          type="number"
          onChange={(event) => {
            setLesson_3({ ...lesson_3, tones: Number(event.target.value) });
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    </Box>
  );
}

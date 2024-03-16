import { Box, Button, Slider, Typography } from "@mui/material";
import data from "../components/data.json";
import {
  AreaPlot,
  ChartContainer,
  ChartsSurface,
  ChartsXAxis,
  LinePlot,
} from "@mui/x-charts";
import { useState } from "react";
import { lesson_10_interface } from "../types";

function findLocalMaximaAndFillAverages(numbers: number[]) {
  let maximaIndexes = [0]; // Startujemy od pierwszego indeksu
  for (let i = 1; i < numbers.length - 1; i++) {
    if (
      numbers[i] > numbers[i - 1] &&
      numbers[i] > numbers[i + 1] &&
      numbers[i] > 0
    ) {
      maximaIndexes.push(i);
    }
  }
  maximaIndexes.push(numbers.length - 1); // Dodajemy ostatni indeks jako koniec

  let filledNumbers = [...numbers]; // Klonujemy oryginalną tablicę
  maximaIndexes.forEach((maxIndex, index) => {
    if (index < maximaIndexes.length - 1) {
      const nextMaxIndex = maximaIndexes[index + 1];
      const avg = (numbers[maxIndex] + numbers[nextMaxIndex]) / 2; // Średnia z obecnych maksimów
      for (let i = maxIndex + 1; i < nextMaxIndex; i++) {
        filledNumbers[i] = avg; // Wypełniamy średnią
      }
    }
  });

  return filledNumbers;
}

interface Lesson_10Props {
    lesson_10: lesson_10_interface;
    setLesson_10: React.Dispatch<React.SetStateAction<lesson_10_interface>>;
  }

export function Lesson_10({ lesson_10, setLesson_10 }: Lesson_10Props) {
  const numbers = data.numbers;
  const indexes: number[] = numbers.map((_, index) => index);
  const rate = 100;

  const numbers2 = numbers.filter((_, index) => index % rate === 0);
  const indexes2 = indexes.filter((_, index) => index % rate === 0);

  const filledNumbers = findLocalMaximaAndFillAverages(numbers2);
  const filledNumbers2 = findLocalMaximaAndFillAverages(filledNumbers);
  const filledNumbers3 = findLocalMaximaAndFillAverages(filledNumbers2);

  const [zoom, setZoom] = useState<number>(1);
  const [pozycja, setPozycja] = useState<number>(500);
  const [position, setPosition] = useState<{ start: number; end: number }>({
    start: 0,
    end: numbers2.length,
  });

  function handlePosition() {
    const ownZoom = zoom / 2;
    const dataAtOnce = Math.floor(numbers2.length / ownZoom);
    const centerPosition = Math.floor((numbers2.length * pozycja) / 1000);
    let start = Math.max(centerPosition - Math.floor(dataAtOnce / 2), 0);
    let end = Math.min(
      centerPosition + Math.floor(dataAtOnce / 2),
      numbers2.length
    );
    setPosition({ start, end });
    console.log(position);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
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
        maxHeight: "800px",
        overflow: "auto",
      }}
    >
      <Typography variant="body1">
        Który wykres jest jednocześnie najprostrzy ale dalej dla ciebie
        czytelny?
      </Typography>
      <Box
        onClick={() => {
            setLesson_10({...lesson_10, selected:1})
        }}
        sx={{
          bgcolor: lesson_10.selected == 1 ? "azure" : "none",
        }}
      >
        <ChartContainer
          width={800}
          height={350}
          series={[
            {
              type: "line",
              data: numbers2.slice(position?.start, position?.end),
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: indexes2.slice(position?.start, position?.end),
            },
          ]}
          yAxis={[{ min: -10000, max: 10000 }]}
          disableAxisListener
        >
          <LinePlot />
        </ChartContainer>
      </Box>
      <Box
        onClick={() => {
            setLesson_10({...lesson_10, selected:2})
        }}
        sx={{
          bgcolor: lesson_10.selected == 2 ? "azure" : "none",
        }}
      >
        <ChartContainer
          width={800}
          height={350}
          series={[
            {
              type: "line",
              data: filledNumbers.slice(position?.start, position?.end),
            },
            {
              type: "line",
              data: filledNumbers
                .slice(position?.start, position?.end)
                .map((value) => -value),
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: indexes2.slice(position?.start, position?.end),
            },
          ]}
          yAxis={[{ min: -10000, max: 10000 }]}
          disableAxisListener
        >
          <LinePlot />
        </ChartContainer>
      </Box>
      <Box
        onClick={() => {
            setLesson_10({...lesson_10, selected:3})
        }}
        sx={{
          bgcolor: lesson_10.selected == 3 ? "azure" : "none",
        }}
      >
        <ChartContainer
          width={800}
          height={350}
          series={[
            {
              type: "line",
              data: filledNumbers2.slice(position?.start, position?.end),
              area: true,
            },
            {
              type: "line",
              data: filledNumbers2
                .slice(position?.start, position?.end)
                .map((value) => -value),
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: indexes2.slice(position?.start, position?.end),
            },
          ]}
          yAxis={[{ min: -10000, max: 10000 }]}
          disableAxisListener
        >
          <LinePlot />
        </ChartContainer>
      </Box>
      <Box
        onClick={() => {
            setLesson_10({...lesson_10, selected:4})
        }}
        sx={{
          bgcolor: lesson_10.selected == 4 ? "azure" : "none",
        }}
      >
        <ChartContainer
          width={800}
          height={350}
          series={[
            {
              type: "line",
              data: filledNumbers3.slice(position?.start, position?.end),
              area: true,
            },
            {
              type: "line",
              data: filledNumbers3
                .slice(position?.start, position?.end)
                .map((value) => -value),
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: indexes2.slice(position?.start, position?.end),
            },
          ]}
          yAxis={[{ min: -10000, max: 10000 }]}
          disableAxisListener
        >
          <LinePlot />
        </ChartContainer>
      </Box>
    </Box>
  );
}

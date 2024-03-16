import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { lesson_0_interface } from "../types";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface Lesson_0Props {
  lesson_0: lesson_0_interface;
  setLesson_0: React.Dispatch<React.SetStateAction<lesson_0_interface>>;
}

export function Lesson_0({ lesson_0, setLesson_0 }: Lesson_0Props) {
  const years = Array.from(
    { length: 2024 - 1924 + 1 },
    (v, k) => `${1924 + k}`
  ).reverse();

  const eyeDefect = [
    "Więcej niż +6 dioptrii",
    "Pomiędzy +2,5 a +6 dioptrii",
    "Pomiędzy 0 a +2,5 dioptrii",
    "Brak",
    "Pomiędzy 0 a -2,5 dioptrii",
    "Pomiędzy -2,5 a -6 dioptrii",
    "Więcej niż -6 dioptrii",
  ];

  const klauzura =
    "Wyrażam zgodę na przetwarzanie moich danych osobowych przez Aleksandra Śpiewaka i ZUT(Zachodniopomorski Uniwersytet Technologiczny), z siedzibą w Szczecinie, NIP: 852-254-50-56, w celach związanych z przeprowadzeniem badania percepcji wizualnej, zdolności do przetwarzania informacji oraz interakcji użytkownika z interfejsem, a także poparcie nimi pracy inżynierskiej Aleksandra Śpiewaka. Rozumiem, że podanie danych osobowych jest dobrowolne, ale niezbędne do realizacji powyższych celów. Zostałem(-am) poinformowany(-a) o prawie dostępu do treści moich danych oraz ich poprawiania, żądania zaprzestania ich przetwarzania oraz wniesienia sprzeciwu wobec ich przetwarzania. Zostałem(-am) poinformowany(-a) o możliwości cofnięcia niniejszej zgody w dowolnym momencie, co jednak nie wpłynie na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.";

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target;
      setLesson_0(prev => ({ ...prev, [name]: checked }));
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
        maxWidth: "600px",
        margin: "auto",
        "& > *": {
          margin: "8px !important",
        },
      }}
    >
      <Typography variant="body1">
        Witajcie, na początek proszę was abyście podali kilka danych
        personalnych.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormLabel id="gender">Płeć</FormLabel>
          <RadioGroup
            aria-labelledby="gender"
            name="gender"
            defaultValue="I"
            value={lesson_0.sex}
            onChange={(event) => {
              setLesson_0({ ...lesson_0, sex: event.target.value });
            }}
          >
            <FormControlLabel value="K" control={<Radio />} label="Kobieta" />
            <FormControlLabel value="M" control={<Radio />} label="Mężczyzna" />
            <FormControlLabel
              value="I"
              control={<Radio />}
              label="Inna lub nie chcę podać"
            />
          </RadioGroup>
        </Box>
        <Autocomplete
          value={years.find((year) => year === lesson_0.birth.toString()) || ""}
          onChange={(event, newValue) => {
            setLesson_0({ ...lesson_0, birth: parseInt(newValue, 10) });
          }}
          sx={{ width: 130 }}
          freeSolo
          id="rokUrodzenia"
          disableClearable
          options={years}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Rok urodzenia"
              value={lesson_0.birth}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <FormGroup>
          <FormControlLabel
  control={<Checkbox checked={lesson_0.dalt} onChange={handleCheckboxChange} name="dalt" />}
  label="Daltonizm"
          />
          <FormControlLabel
  control={<Checkbox checked={lesson_0.adhd} onChange={handleCheckboxChange} name="adhd" />}
  label="Problemy z koncentracją lub ADHD"
          />
          <FormControlLabel
  control={<Checkbox checked={lesson_0.tired} onChange={handleCheckboxChange} name="tired" />}
  label="Zmęczenie"
          />
          <FormControlLabel
  control={<Checkbox checked={lesson_0.dys} onChange={handleCheckboxChange} name="dys" />}
  label="Dyslekcja"
          />
        </FormGroup>
        <Autocomplete
          value={
            eyeDefect.find(
              (eyeDefect) => eyeDefect === lesson_0.eye.toString()
            ) || ""
          }
          onChange={(event, newValue) => {
            setLesson_0({ ...lesson_0, eye: newValue });
          }}
          sx={{ width: 300, marginLeft: 8 }}
          freeSolo
          id="wadaWzroku"
          disableClearable
          options={eyeDefect}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Wada wzroku"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}
      >
<FormControlLabel
  control={
    <Checkbox
      {...label}
      checked={lesson_0.clause}
      onChange={handleCheckboxChange}
      name="clause"
    />
  }
  label=""
/>        <Box sx={{ fontSize: "0.8rem" }}>{klauzura}</Box>
      </Box>
    </Box>
  );
}

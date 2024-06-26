import {
  Box,
  Button,
  Checkbox,
  Container,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numbers, setNumbers] = useState();
  const [symbols, setSymbols] = useState("");
  const passwordRef = useRef(null);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
  };
  useEffect(() => {
    generatePassword();
  }, [numbers, symbols, length]);
  const includeNumbers = (e: any) => {
    setNumbers(e.target.checked);
  };
  const includeSymbols = (e: any) => {
    setSymbols(e.target.checked);
  };
  let changeLength = (e: any) => {
    setLength(e.target.value);
  };
  const generatePassword = () => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (numbers) {
      str += "123456789";
    }
    if (symbols) {
      str += "!@#$%&*";
    }

    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * str.length);
      let char = str.charAt(randomNumber);
      pass += char;
    }
    setPassword(pass);
  };
  return (
    <>
      <Container sx={{ display: "flex" }}>
        <Box
          sx={{
            border: 1,
            backgroundColor: "grey",
            my: 15,
            py: 5,
            minWidth: "500px",
          }}
        >
          <Typography
            sx={{
              color: "blue",
              size: "large",
              mx: 3,
              pb: 4,
              fontSize: 25,
            }}
          >
            PasswordGenerator
          </Typography>
          <Box
            sx={{
              border: 2,
              borderColor: "black",
              display: "flex",
              justifyContent: "center",
              mx: "20px",
            }}
          >
            <TextField
              value={password}
              onChange={generatePassword}
              placeholder="Password"
              inputProps={{ readOnly: true }}
              ref={passwordRef}
              sx={{
                backgroundColor: "white",
                color: "red",
                flexGrow: 2,
              }}
            ></TextField>
            <Button
              variant="contained"
              sx={{
                width: "25px",
                border: 2,
                borderColor: "black",
                flexGrow: 1,
              }}
              onClick={copyPassword}
            >
              copy
            </Button>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", mx: 3, marginTop: 3 }}
          >
            <Slider
              step={1}
              min={5}
              max={10}
              valueLabelDisplay="on"
              aria-label="small"
              value={length}
              onChange={changeLength}
            />
            <Typography>Length</Typography>
            <Checkbox value={numbers} onChange={includeNumbers}></Checkbox>
            <Typography>Numbers</Typography>
            <Checkbox value={symbols} onChange={includeSymbols}></Checkbox>
            <Typography>Characters</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PasswordGenerator;

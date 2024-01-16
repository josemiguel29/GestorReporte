import React from "react";
import {
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

export const Login = () => {
  const styles = {
    containerBox: {
      width: "50%",
      Height: "50vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    contentBox: {
      height: "60vh",
      width: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "#cacace",
    },
  };
  return (
    <Container
      fixed
      sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "100vh",
          width: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={styles?.containerBox}>
          <Box sx={styles?.contentBox}>
            <h1>login</h1>
            <FormControl sx={{ width: "50%" }}>
              <InputLabel id="demo-simple-select-label">
                NOMBRE DEL PROYECTO
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Age"
              >
                <MenuItem value={10}>MIFIANZA</MenuItem>
                <MenuItem value={20}>OSSADO</MenuItem>
                <MenuItem value={30}>XOFIA</MenuItem>
                <MenuItem value={30}>MILI</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="user"
              label="USUARIO"
              variant="outlined"
              sx={{ width: "50%" }}
            />
            <TextField
              id="password"
              label="CONTRASEÑA"
              variant="outlined"
              sx={{ width: "50%" }}
            />
            <Button variant="contained">iniciar</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

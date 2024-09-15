import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import {
  Box,
  Typography,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Container,
  Paper,
} from "@mui/material";

const Dashboard = () => {
  const user = "Username";

  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [commuteDays, setCommuteDays] = useState(() => [
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
  ]);

  const handleDays = (event, newDays) => {
    setCommuteDays(newDays);
  };

  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <PageContainer>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Hello! Please fill out more information about your commute.
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <TextField
              label="Start Time"
              type="time"
              value={startTime}
              variant="outlined"
              onChange={(e) => setStartTime(e.target.value)}
            />
            <TextField
              label="End Time"
              type="time"
              value={endTime}
              variant="outlined"
              onChange={(e) => setEndTime(e.target.value)}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Commute Days
            </Typography>
            <ToggleButtonGroup
              value={commuteDays}
              onChange={handleDays}
              aria-label="commute days"
            >
              {days.map((day) => (
                <ToggleButton
                  key={day}
                  value={day}
                  aria-label={day}
                  sx={{
                    borderRadius: "100%",
                    minWidth: "40px",
                    height: "40px",
                    m: 0.5,
                    "&.Mui-selected": {
                      backgroundColor: "primary.main",
                      color: "white",
                      "&:hover, &:focus": {
                        backgroundColor: "primary.main",
                      },
                    },
                    "&:hover": {
                      backgroundColor: "secondary.main",
                    },
                  }}
                >
                  {day}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Paper>
    </PageContainer>
  );
};

export default Dashboard;

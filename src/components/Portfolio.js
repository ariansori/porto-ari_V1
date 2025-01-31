import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import Projects from "./Projects";
import Certificates from "./Certificates";
import TechStack from "./TechStack";
import "../assets/styles/Portfolio.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Portfolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="portfolio-container">
      <AppBar position="static" sx={{ bgcolor: "transparent" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label="Projects" />
          <Tab label="Certificates" />
          <Tab label="Tech Stack" />
        </Tabs>
      </AppBar>
      <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Projects />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Certificates />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TechStack />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
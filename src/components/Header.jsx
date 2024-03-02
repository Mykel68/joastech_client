import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <EmailIcon />
            mail:mail@gmail.com
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <CallIcon /> +91 123456789
          </Typography>
          <Button color="inherit">
            <PersonIcon />
            Login
          </Button>
          <Button color="inherit">
            <ExitToAppSharpIcon />
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

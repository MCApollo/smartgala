import {
  AppBar,
  AppBarProps,
  Box,
  Fade,
  Grow,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import React, { useState } from "react";
import constantSite from "../lib/constants/constantSite";
import MenuBar from "./MenuBar";

// TODO: i18n support
const STRINGS = {
  title: constantSite.name,
};

/**
 * https://mui.com/material-ui/react-app-bar/#ElevateAppBar.tsx
 */

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(trigger ? <Fade in>{children}</Fade> : children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? "primary" : "transparent",
  } as AppBarProps);
}

const Navigation: React.FunctionComponent = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    return setMenu(true);
  };

  const closeMenu = () => {
    return setMenu(false);
  };

  return (
    <Box>
      <ElevationScroll>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {STRINGS.title}
              </Typography>

              <Box>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={openMenu}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />

      <MenuBar open={menu} setClose={closeMenu} />
    </Box>
  );
};

export default Navigation;

import { Avatar, Box, Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import constantSite from "../lib/constants/constantSite";

import LocationCityIcon from "@mui/icons-material/LocationCity";
import Wave from "./theme/Wave";

const STRINGS = {
  about: {
    title: "About Us",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`,
  },

  services: {
    title: "Services",

    first: {
      title: "Service 1",
      description: "Service 1 description",
    },

    second: {
      title: "Service 2",
      description: "Service 2 description",
    },

    third: {
      title: "Service 3",
      description: "Server 3 description",
    },
  },
};

const PADDING = {
  small: 2,
  medium: 5,
  large: 10,
};

const imageProps = {
  height: 150,
  width: 150,
};

const sxProps = {
  padding: PADDING.medium,
  paddingTop: PADDING.large,
  paddingBottom: PADDING.large,
  border: "none",
};

const MainBody: React.FunctionComponent = () => {
  return (
    <Box>
      {/* About Us */}

      <Card
        square
        sx={{
          color: "primary.contrastText",
          backgroundColor: "primary.dark",
          ...sxProps,
        }}
      >
        <Container>
          <Typography align="center" variant="h2">
            {STRINGS.about.title}
          </Typography>

          <br />

          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            wrap="nowrap"
            // dynamic flex direction:
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
              },
              [theme.breakpoints.up("md")]: {
                flexDirection: "row",
              },
            })}
          >
            <Grid item sx={{ p: PADDING.small }}>
              <Avatar sx={imageProps}>
                <Image src={constantSite.images.bidding} layout="fill" />
              </Avatar>
            </Grid>

            <Grid item>
              <Typography
                // text-align center on smaller devices
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    textAlign: "center",
                  },
                })}
              >
                {STRINGS.about.description}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Card>

      {/* Services */}
      {/* <Card
        className="wave"
        square
        sx={{
          color: "primary.contrastText",
          backgroundColor: "primary.dark",
          ...sxProps,
        }}
      >
        <Container>
          <Typography align="center" variant="h2">
            {STRINGS.services.title}
          </Typography>
        </Container>

        <br />

        <Grid
          container
          justifyContent="space-evenly"
        >
          <Grid item>
            <LocationCityIcon />

            <Typography variant='h4'>
              {STRINGS.services.first.title}
            </Typography>

            <Typography>
              {STRINGS.services.first.description}
            </Typography>
          </Grid>

          <Grid item>
            <LocationCityIcon />

            <Typography variant='h4'>
              {STRINGS.services.second.title}
            </Typography>

            <Typography>
              {STRINGS.services.second.description}
            </Typography>
          </Grid>

          <Grid item>
            <LocationCityIcon />

            <Typography variant='h4'>
              {STRINGS.services.third.title}
            </Typography>

            <Typography>
              {STRINGS.services.third.description}
            </Typography>
          </Grid>
        </Grid>
      </Card> */}
    </Box>
  );
};

export default MainBody;

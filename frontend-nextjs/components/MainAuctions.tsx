import {
  Box,
  ButtonBase,
  Card,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import constantSite from "../lib/constants/constantSite";
import { getStrapiMedia } from "../lib/strapi/strapiAPI";
import { AuctionData } from "../lib/strapi/types/IStrapiAuction";
import Wave from "./theme/Wave";

const STRINGS = {
  title: "Explore Auctions",
  description: "See who we have helped:",
};

interface Props {
  auctions: AuctionData[];
}

const MainAuctions: React.FunctionComponent<Props> = ({ auctions }) => {
  const theme = useTheme();

  return (
    <Box>
      <Wave color={theme.palette.primary.main} />

      <Card
        square
        sx={{
          color: "primary.contrastText",
          backgroundColor: "primary.main",
          pb: "1em",
        }}
      >
        <Container>
          <Typography variant="h2" align="center">
            {STRINGS.title}
          </Typography>

          <br />

          <Typography variant="h6" align="center">
            {STRINGS.description}
          </Typography>
        </Container>

        <Container>
          <Grid container direction="column" flexWrap="wrap">
            {(auctions || []).map((auction, index) => {
              return (
                /**
                 * TODO: Fancy display:
                 *
                 * One element (on bigger devices), takes 8 spaces, next element takes 4 spaces
                 *  This should swap between each row
                 *
                 * On smaller devices: Just show in flex-column
                 *
                 * | [    element 1    ] [ element 2 ] |
                 * | [ element 3 ] [    element 4   ] |
                 */
                <Grid item key={`auction-${index}`} xs={index % 2 ? 8 : 4}>
                  <Link
                    href={constantSite.pages.auctions + auction.attributes.slug}
                  >
                    <ButtonBase
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "black",
                        p: "4em",
                        mt: "1em",
                      }}
                    >
                      <Typography variant="h4" align="center">
                        {auction.attributes.Event.Name}
                      </Typography>
                    </ButtonBase>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Card>
    </Box>
  );
};

export default MainAuctions;

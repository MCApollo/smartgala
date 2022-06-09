import { BottomNavigation, Card, Typography } from "@mui/material";
import { Container } from "@mui/system";

const STRINGS = {
  copyright: "Example copyright here (C)",
};

const Footer: React.FunctionComponent = () => {
  return (
    <BottomNavigation>
      <Card>
        <Typography>{STRINGS.copyright}</Typography>
      </Card>
    </BottomNavigation>
  );
};

export default Footer;

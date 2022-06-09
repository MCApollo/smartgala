import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const LINKS = {
  Home: "/",
  "Example Example Example": "/",
  Foo: "/foo",
};

const WIDTH = 250;

interface Props {
  open: boolean;
  setClose: () => void;
}

const MenuBar: React.FunctionComponent<Props> = ({ open, setClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={setClose}>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("lg")]: {
            width: WIDTH * 3,
          },

          [theme.breakpoints.down("lg")]: {
            width: WIDTH * 2,
          },

          [theme.breakpoints.down("sm")]: {
            width: WIDTH,
          },
        })}
      >
        <List>
          {Object.entries(LINKS).map(([text, href], index) => (
            <ListItem key={`menu-item-${index}`}>
              <Typography variant="h6">{text}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MenuBar;

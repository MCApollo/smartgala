import { useTheme } from "@mui/material";
import ReactWavify from "react-wavify";

const defaultOptions: Options = {
  height: 10,
  amplitude: 30,
  speed: 0.15,
  points: 3,
};

interface Options {
  height: number;
  amplitude: number;
  speed: number;
  points: number;
}

interface Props {
  options?: Partial<Options>;
  color?: "primary" | "secondary" | string;
}

const Wave: React.FunctionComponent<Props> = ({ color = "", options = {} }) => {
  const theme = useTheme();

  const opts = {
    ...defaultOptions,
    ...options,
  };

  return (
    <ReactWavify
      fill={color || theme.palette.primary.main}
      paused={false}
      options={opts}
      style={{
        zIndex: -1,
        marginBottom: -10,
        display: "flex",
      }}
    />
  );
};

export default Wave;

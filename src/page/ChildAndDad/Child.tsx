import { Box, Divider, SxProps, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { themeProps } from "../../types/models/ui";

interface Props {
  currentMode: string;
  listMode: {
    value: string;
    color: string;
  }[];
  handleChangeMode: (mode: string) => void;
  theme: themeProps;
}

const FooterStyle: SxProps = {
  backgroundColor: "footer.default",
  padding: "20px 0px",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: "0px",
  width: "100%",
};

const Col = (p: any) => {
  return <Box display="flex" flexDirection="column" {...p} />;
};

const Row = (p: any) => {
  return <Box display="flex" flexDirection="row" {...p} />;
};

const BoxMode = ({
  mode,
  currentMode,
  handleChangeMode,
}: {
  mode?: { color: string; value: string };
  currentMode: string;
  handleChangeMode: (mode: string) => void;
}) => {
  return (
    <Col sx={{ alignItems: "center" }}>
      <Box
        onClick={() => handleChangeMode(mode!.value)}
        sx={{
          cursor: "pointer",
          width: "2em",
          height: "2em",
          backgroundColor: mode?.color,
          borderRadius: "12px",
          margin: "0px 5px",
          animationDuration: "2s",
        }}
      />
      {currentMode === mode!.value && (
        <ArrowUpwardIcon
          sx={{
            color: mode?.color,
            animation: "arrow .5s infinite linear alternate",
            "@keyframes arrow": {
              "0%": { transform: "translateY(0px)" },
              "100%": { transform: "translateY( 10px)" },
            },
          }}
        />
      )}
    </Col>
  );
};

const Child = ({ currentMode, listMode, handleChangeMode, theme }: Props) => {
  return (
    <Col>
      <Row
        sx={{
          backgroundColor: theme.header,
          padding: "20px 0px",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography sx={{ color: theme.text }}>
          Game of Thrones Quotes
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            color: theme.text,
            right: "10px",
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          Use Component Child
        </Typography>
      </Row>
      <Row
        sx={{
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 0px",
        }}
      >
        <Typography sx={{ color: theme.text }}>Themes:</Typography>
        {listMode.map((mode, index) => {
          return (
            <BoxMode
              key={index}
              mode={mode}
              currentMode={currentMode}
              handleChangeMode={handleChangeMode}
            />
          );
        })}
      </Row>
      <Divider sx={{ padding: "5px 0px" }} />
      <Col
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Col
          sx={{
            width: "50%",
            border: "1px solid ",
            borderColor: theme.quoteBorder,
            padding: "0px 20px",
            borderRadius: "12px",
            marginBottom: "10px",
            backgroundColor: theme.quoteBgc,
          }}
        >
          <Row sx={{ alignItems: "center", justifyContent: "center" }}>
            <Typography sx={{ color: theme.quoteTitle, fontWeight: "bold" }}>
              Bran Stack
            </Typography>
          </Row>
          <Typography sx={{ color: theme.quoteBody }}>
            Continuing with our refactoring, let’s make changes to the other
            styled components, such as the Header, Footer, Card and
            ThemeSwitching so they can have access to our theme prop.
          </Typography>
        </Col>
      </Col>
      <Col sx={{ ...FooterStyle }}>
        <Typography sx={{ color: theme.text_footer }}>
          Made with love by Phan van Thanh
        </Typography>
      </Col>
    </Col>
  );
};

export default Child;

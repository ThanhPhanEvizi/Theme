import { useEffect } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  SxProps,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useDispatch, useSelector } from "react-redux";
import { COLOR_MODE } from "../constants/color";
import {
  changeMode,
  fetchColorMode,
  selectIsLoading,
  selectMode,
} from "../redux/ui/UiSlice";

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
  current_mode,
}: {
  mode?: { color: string; value: string };
  current_mode: string;
}) => {
  const dispatch = useDispatch();
  const handleChangeMode = (mode: string) => {
    dispatch(changeMode(mode));
  };

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
      {current_mode === mode!.value && (
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

const Quotes = () => {
  return (
    <Col
      sx={{
        width: "50%",
        border: "1px solid ",
        borderColor: "quoteBorder",
        padding: "0px 20px",
        borderRadius: "12px",
        marginBottom: "10px",
        backgroundColor: "quoteBgc",
      }}
    >
      <Row sx={{ alignItems: "center", justifyContent: "center" }}>
        <Typography sx={{ color: "quoteTitle", fontWeight: "bold" }}>
          Bran Stack
        </Typography>
      </Row>
      <Typography sx={{ color: "quoteBody" }}>
        Continuing with our refactoring, let’s make changes to the other styled
        components, such as the Header, Footer, Card and ThemeSwitching so they
        can have access to our theme prop.
      </Typography>
    </Col>
  );
};

const HomePage = () => {
  const dispatch = useDispatch();
  const listMode = [
    COLOR_MODE.BLUE,
    COLOR_MODE.GREEN,
    COLOR_MODE.BROWN,
    COLOR_MODE.DARK,
    COLOR_MODE.LIGHT,
    COLOR_MODE.PINK,
  ];
  const current_mode = useSelector(selectMode);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const getColorMode = () => {
      dispatch(fetchColorMode());
    };
    getColorMode();
  }, [dispatch]);

  return (
    <Col
      sx={{
        height: "100vh",
        backgroundColor: "background.default",
        position: "relative",
      }}
    >
      {current_mode && (
        <>
          <Row
            sx={{
              backgroundColor: "header.default",
              padding: "20px 0px",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Typography sx={{ color: "text.primary" }}>
              Game of Thrones Quotes
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                color: "text.primary",
                right: "10px",
                fontSize: "2em",
                fontWeight: "bold",
              }}
            >
              Use Redux
            </Typography>
          </Row>
          <Row
            sx={{
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 0px",
            }}
          >
            <Typography sx={{ color: "text.primary" }}>Themes:</Typography>
            {listMode.map((mode, index) => {
              return (
                <BoxMode key={index} mode={mode} current_mode={current_mode} />
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
            <Quotes />
            <Quotes />
            <Quotes />
          </Col>
          <Col sx={{ ...FooterStyle }}>
            <Typography sx={{ color: "text_footer" }}>
              Made with love by Phan van Thanh
            </Typography>
          </Col>
        </>
      )}

      {isLoading && (
        <CircularProgress
          sx={{
            position: "absolute",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            top: "50%",
          }}
          color="secondary"
        />
      )}
    </Col>
  );
};

export default HomePage;

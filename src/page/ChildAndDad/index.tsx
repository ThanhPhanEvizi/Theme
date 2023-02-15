import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { COLOR_MODE, COLOR_MODE_CHILDREN } from "../../constants/color";
import {
  fetchColorMode,
  selectIsLoading,
  selectMode,
} from "../../redux/ui/UiSlice";
import { themeProps } from "../../types/models/ui";
import Child from "./Child";

const Col = (p: any) => {
  return <Box display="flex" flexDirection="column" {...p} />;
};

const renderItemTypeMap = {
  [COLOR_MODE.BLUE.value]: { theme: COLOR_MODE_CHILDREN.BLUE },
  [COLOR_MODE.GREEN.value]: { theme: COLOR_MODE_CHILDREN.GREEN },
  [COLOR_MODE.BROWN.value]: { theme: COLOR_MODE_CHILDREN.BROWN },
  [COLOR_MODE.DARK.value]: { theme: COLOR_MODE_CHILDREN.DARK },
  [COLOR_MODE.LIGHT.value]: { theme: COLOR_MODE_CHILDREN.LIGHT },
  [COLOR_MODE.PINK.value]: { theme: COLOR_MODE_CHILDREN.PINK },
};

const ChildAndDadPage = () => {
  const dispatch = useDispatch();
  const current_mode = useSelector(selectMode);
  const [currentMode, setCurrentMode] = useState<string>(current_mode);
  const [theme, setTheme] = useState<themeProps>();
  const isLoading = useSelector(selectIsLoading);
  const listMode = [
    COLOR_MODE.BLUE,
    COLOR_MODE.GREEN,
    COLOR_MODE.BROWN,
    COLOR_MODE.DARK,
    COLOR_MODE.LIGHT,
    COLOR_MODE.PINK,
  ];

  useEffect(() => {
    const getColorMode = () => {
      dispatch(fetchColorMode());
    };
    getColorMode();
  }, [dispatch]);

  //set theme after call api done
  useEffect(() => {
    const { theme } = renderItemTypeMap[current_mode] || {};
    setTheme(theme);
  }, [current_mode]);

  const handleChangeMode = (mode: string) => {
    setCurrentMode(mode);
    const { theme } = renderItemTypeMap[mode] || {};
    setTheme(theme);
  };

  return (
    <Col
      sx={{
        height: "100vh",
        backgroundColor: theme?.background || "white",
        position: "relative",
      }}
    >
      {theme && (
        <Child
          handleChangeMode={handleChangeMode}
          listMode={listMode}
          currentMode={currentMode}
          theme={theme}
        />
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

export default ChildAndDadPage;

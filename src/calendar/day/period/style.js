import { StyleSheet } from "react-native";
import * as defaultStyle from "../../../style";

const STYLESHEET_ID = "stylesheet.day.period";

export const FILLER_HEIGHT = 38;
export const FILLER_HEIGHT_OFFSET = 8;

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    helperText: {
      color: "#D44767",
      fontSize: 11,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: "bold"
    },
    helperTextContainer: {
      position: "absolute",
      top: -14
    },
    wrapper: {
      alignItems: "center",
      alignSelf: "stretch",
      marginLeft: -1
    },
    base: {
      //borderWidth: 1,
      width: 38,
      height: FILLER_HEIGHT,
      alignItems: "center"
    },
    fillers: {
      position: "absolute",
      height: FILLER_HEIGHT - FILLER_HEIGHT_OFFSET,
      flexDirection: "row",
      left: 0,
      right: 0,
      top: FILLER_HEIGHT_OFFSET / 2
    },
    leftFiller: {
      height: FILLER_HEIGHT - FILLER_HEIGHT_OFFSET,
      flex: 1
    },
    rightFiller: {
      height: FILLER_HEIGHT - FILLER_HEIGHT_OFFSET,
      flex: 1
    },
    text: {
      marginTop: 8,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor || "#2d4150",
      backgroundColor: "rgba(255, 255, 255, 0)"
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor,
      // backgroundColor: "white",
      borderColor: "#C4CACC",
      borderWidth: 1,
      borderRadius: 19
    },
    todayText: {
      fontWeight: "500",
      color: theme.todayTextColor || appStyle.dayTextColor
      //color: appStyle.textLinkColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    quickAction: {
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "#c1e4fe"
    },
    quickActionText: {
      marginTop: 6,
      color: appStyle.textColor
    },
    firstQuickAction: {
      backgroundColor: appStyle.textLinkColor
    },
    firstQuickActionText: {
      color: "white"
    },
    naText: {
      color: "#b6c1cd"
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

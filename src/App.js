import React from "react";
import { Deck, FlexBox, Box, FullScreen, Progress } from "spectacle";
import { welcome } from "./pages/01_Welcome";
import { what_is_virtualization } from "./pages/02_WhatIsVirtualization";
import { what_can_be_virtualized } from "./pages/03_WhatCanBeVirtualized";
import { emulation } from "./pages/03_Types/01_Emulation";
import { native } from "./pages/03_Types/02_Native";
import { OS } from "./pages/03_Types/03_OS";
import { application } from "./pages/03_Types/04_Application";
import { history } from "./pages/04_History";
import { advantages } from "./pages/05_Advantages";
import { thanks } from "./pages/06_Thanks";
import { resources } from "./pages/07_Resources";

/*
Notes are shown in presenter mode. Open up
localhost:3000/?presenterMode=true to see them.
*/

const theme = {
  colors: {
    primary: "white",
    secondary: "#41FF00",
  },
  fonts: {
    header: "Montserrat",
    paragraph: "Helvetica",
  },
  fontSizes: {
    header: "64px",
    paragraph: "28px",
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const App = () => {
  return (
    <Deck theme={theme} template={template} transitionEffect="fade">
      {welcome}
      {what_is_virtualization}
      {what_can_be_virtualized}
      {emulation}
      {native}
      {OS}
      {application}
      {history}
      {advantages}
      {thanks}
      {resources}
    </Deck>
  );
};
export default App;

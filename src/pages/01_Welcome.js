import React from "react";
import { Slide, Heading, Notes, FlexBox } from "spectacle";

export const welcome = (
  <Slide
    backgroundImage="url(https://miro.medium.com/max/1000/0*yS_K8Fo3A5WYAqQE)"
    backgroundOpacity={0.5}
  >
    <FlexBox position="absolute" bottom={250} width={1}>
      <Heading>Virtualizace</Heading>
    </FlexBox>

    <FlexBox position="absolute" bottom={50} left={50}>
      <Heading fontSize="200%">Marek Sokol</Heading>
    </FlexBox>

    <Notes>
      <p>Zdravím, vítám Vás u mé prezentace na téma virtualizace.</p>
    </Notes>
  </Slide>
);

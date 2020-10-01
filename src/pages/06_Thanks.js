import React from "react";
import { Slide, Heading, FlexBox, Notes } from "spectacle";

export const thanks = (
  <Slide backgroundColor="black">
    <FlexBox position="absolute" bottom={250} width={1}>
      <Heading>Děkuji za pozornost</Heading>
    </FlexBox>

    <Notes>
      <p>
        A toto je konec mé prezentace. Děkuji za pozornost. Má někdo nějaké
        dotazy...?
      </p>
    </Notes>
  </Slide>
);

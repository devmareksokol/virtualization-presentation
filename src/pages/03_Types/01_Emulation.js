import React from "react";
import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  Notes,
} from "spectacle";

export const emulation = (
  <Slide backgroundColor="black">
    <Heading>Emulace</Heading>
    <UnorderedList>
      <Appear elementNum={0}>
        <ListItem>Virtualizace hardware</ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>Nejuniverzálnější</ListItem>
      </Appear>
      <Appear elementNum={2}>
        <ListItem>Nejméně výkonné</ListItem>
      </Appear>
      <Appear elementNum={3}>
        <ListItem>Ideální pro hraní her i vývoj a testování platforem</ListItem>
      </Appear>
    </UnorderedList>

    <Notes>
      <p>
        První je emulace. Virtuální stroj simuluje celý hardware, je tedy
        nejuniverzálnější nebo-li hostitelské OS běží neupraveno na zcela
        odlišném zařízení. Bohužel tohle má za následek snížený výkon.
      </p>
    </Notes>
  </Slide>
);

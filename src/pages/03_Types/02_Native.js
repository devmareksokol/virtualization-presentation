import React from "react";
import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  Notes,
} from "spectacle";

export const native = (
  <Slide backgroundColor="black">
    <Heading>Nativní virtualizace</Heading>
    <UnorderedList>
      <Appear elementNum={0}>
        <ListItem>Nejběžnější virtualizace</ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>Procesor není emulován</ListItem>
      </Appear>
      <Appear elementNum={2}>
        <ListItem>Vše ostatní ano</ListItem>
      </Appear>
      <Appear elementNum={3}>
        <ListItem>Například VirtualBox nebo VMware workstation</ListItem>
      </Appear>
    </UnorderedList>

    <Notes>
      <p>
        Druhým druhem je nativní virtualizace. Pro tento typ mezi výhody patří
        možnosti startu systému bez úprav a minimalističnost, stačí x86
        procesor, virtuální stroj totiž simuluje dostatečné množství hardware
        aby umožnil oddělený běh neupraveného hosta určeného pro stejný druh
        CPU. Mezi příklady patří především VirtualBox nebo VMware workstation.
      </p>
    </Notes>
  </Slide>
);

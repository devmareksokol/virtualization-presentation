import React from "react";
import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  Notes,
} from "spectacle";

export const OS = (
  <Slide backgroundColor="black">
    <Heading>Virtualizace na úrovni OS</Heading>
    <UnorderedList>
      <Appear elementNum={0}>
        <ListItem>V podstatě nic nesimuluje</ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>Vše běží pod jedním jádrem</ListItem>
      </Appear>
      <Appear elementNum={2}>
        <ListItem>Lepší kontrola sdílení (= souborů, sítě atd.)</ListItem>
      </Appear>
      <Appear elementNum={3}>
        <ListItem>Nejlepší výkon, ale nejméně možností</ListItem>
      </Appear>
      <Appear elementNum={4}>
        <ListItem>Tento systém využívá například Docker</ListItem>
      </Appear>
    </UnorderedList>

    <Notes>
      <p>
        Třetím typem je virtualizace na úrovni operačního systému. Ta vyžaduje
        opravdu moderní procesory, jelikož se virtualizuje fyzický server na
        úrovni operačního systému. To umožní aby na jednom zařízení fungovalo
        více různých serverů. Díky tomu pak běží několiv hostovaných operačních
        systémů spolu s jedním hostitelským operačním systémem. Nejlepším
        příkladem za všechny je Docker.
      </p>
    </Notes>
  </Slide>
);

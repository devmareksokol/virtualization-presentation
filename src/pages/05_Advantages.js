import React from "react";
import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  Notes,
} from "spectacle";

export const advantages = (
  <Slide backgroundColor="black">
    <Heading>Výhody</Heading>
    <UnorderedList>
      <Appear elementNum={0}>
        <ListItem>Plné využití výkonu = více služeb, méně serverů</ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>Provoz více OS na jednom zařízení</ListItem>
      </Appear>
      <Appear elementNum={2}>
        <ListItem>Jednodušší zálohy</ListItem>
      </Appear>
      <Appear elementNum={3}>
        <ListItem>Dynamické přidělování výkonu</ListItem>
      </Appear>
    </UnorderedList>

    <Notes>
      <p>
        Mezi hlavní výhody virtulizace patří umožnění využití plného
        hardwarového výkonu zařízení, díky tomu lze sloučit více služeb na méně
        serverech. Dalšími výhodami je umožnění provozu více operačních systémů
        na jednom fyzickém serveru nebo jednodušší zálohování a obnovu záloh.
        Umožňuje také dynamické přidělování výkonu (jak navyšování i snižování).
      </p>
    </Notes>
  </Slide>
);

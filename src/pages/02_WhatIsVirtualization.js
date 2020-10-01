import React from "react";
import { Slide, Heading, Notes, FlexBox } from "spectacle";

export const what_is_virtualization = (
  <Slide backgroundColor="black">
    <FlexBox position="absolute" bottom={250} width={1}>
      <Heading>Definice</Heading>
    </FlexBox>

    <Notes>
      <p>Nejprve si musíme vysvětlit co to virtualizace je.</p>
      <p>
        Pojem virtualizace je označení postupu, který nám umožňuje v počítači
        přistupovat k dostupným zdrojům jiným způsobem, než jakým fyzicky
        existují a jak jsou propojeny. Virtualizované prostředí může být mnohem
        snáze přizpůsobeno potřebám uživatelů a lépe se používat, případně před
        uživateli zakrývat pro ně nepodstatné technické detaily. Jinak řečeno -
        zařízení je dostupné virtuálně ne fyzicky.
      </p>
    </Notes>
  </Slide>
);

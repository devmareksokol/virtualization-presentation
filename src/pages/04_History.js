import React from "react";
import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  Notes,
} from "spectacle";

export const history = (
  <Slide backgroundColor="black">
    <Heading>Historie</Heading>
    <UnorderedList>
      <Appear elementNum={0}>
        <ListItem>Firma IBM v 60. letech 20 století</ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>První počítač IBM 704</ListItem>
      </Appear>
    </UnorderedList>

    <Notes>
      <p>
        První pokusy s virtualizací přišly již v šedesátých letech dvacátého
        století - firma IBM zkoušela u svých sálových počítačů. Virtualizace v
        této době znamenala především hledání možností, jak ze systémů, které
        byly schopné zpracovávat jen jeden úkol v jeden okamžik, vytvořit
        vícevláknová zařízení, která by jednotlivé operace prokládala, a tím
        lépe využívala možností tehdejšího hardwaru. Jedním z prvních strojů
        využívající virtualizaci byl počítač IBM 704. Další vývoj v této oblasti
        nastavil víceuživatelská prostředí jako jakýsi standard a virtualizace
        se v těchto letech začala podobat tomu, jak ji známe dnes. Základem byl
        dispečer nazývaný typicky virtual machine monitor, který měl přímý
        přístup k fyzickým prostředkům počítače neboli hardwaru a následně
        spravoval jednotlivé virtuální počítače. Dnes běžně nazýváme takovýto
        systém jako hypervisor.
      </p>
    </Notes>
  </Slide>
);

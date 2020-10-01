import React from "react";
import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  Notes,
} from "spectacle";

export const application = (
  <Slide backgroundColor="black">
    <Heading>Aplikační virtualizace</Heading>
    <UnorderedList>
      <Appear elementNum={0}>
        <ListItem>Nevyžaduje podporu hostitele</ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>Bezproblémové nasazení</ListItem>
      </Appear>
      <Appear elementNum={2}>
        <ListItem>Velice dobrý výkon</ListItem>
      </Appear>
      <Appear elementNum={3}>
        <ListItem>Například Java Virtual Machine</ListItem>
      </Appear>
    </UnorderedList>

    <Notes>
      <p>
        Čtvrtým typem je aplikační virtualizace. U této desktopové nebo
        serverové aplikace běžící na daném stroji, používají místní zdroje, ale
        běží ve zvláštním virtuálním stroji. To je rozdíl oproti tradičnímu
        lokálnímu běhu nativních aplikací, tedy softwaru nainstalovaném přímo na
        systému, taková aplikace běží v malém virtuálním prostředí obsahujícím
        komponenty nutné ke spuštění – např. položky registrů, soubory, proměnné
        prostředí, prvky uživatelského rozhraní a globální objekty. Toto
        virtuální prostředí se chová jako vrstva mezi aplikací a operačním
        systémem, která zabraňuje konfliktům mezi aplikací a OS nebo mezi
        aplikacemi vzájemně. Toto využívá například Java Virtual Machine.
      </p>
    </Notes>
  </Slide>
);

import React from "react";
import {
  Slide,
  Heading,
  UnorderedList,
  Appear,
  ListItem,
  Notes,
} from "spectacle";

export const what_can_be_virtualized = (
  <Slide
    backgroundImage="url(https://www.racksolutions.com/news//app/uploads/AdobeStock_90603827-2048x1152.jpeg)"
    backgroundOpacity={0.5}
  >
    <Heading>Přístupy k virtualizaci</Heading>

    <UnorderedList>
      <Appear elementNum={0}>
        <ListItem>Emulace</ListItem>
      </Appear>
      <Appear elementNum={1}>
        <ListItem>Plná virtualizace</ListItem>
      </Appear>

      <Appear elementNum={2}>
        <ListItem>Virtualizace na úrovni OS</ListItem>
      </Appear>
      <Appear elementNum={3}>
        <ListItem>Aplikační virtualizace</ListItem>
      </Appear>
    </UnorderedList>

    <Notes>
      <p>
        Celkem existují čtyři různé typy virtualizace a to jsou emulace, plná
        nebo také nativní virtualizace, virtualizace na úrovni operačního
        systému a čistě aplikační virtualizace. Mezi těmito použitími jsou
        markantní rozdíly v použítí, výkonu i vhodnosti. Tak si nyní všechny
        jednotlivně projdeme.
      </p>
    </Notes>
  </Slide>
);

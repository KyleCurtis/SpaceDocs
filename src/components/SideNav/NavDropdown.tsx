/* CHAKRA IMPORTS
============================================================================ */
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react";

const NavDropdown = ({ buttonTitle, contentSection }) => {
  return (
    <div>
      <Accordion allowMultiple border={"none"} borderTopColor="transparent" borderBottomColor="var(--mat-dark-border)">
        <AccordionItem>
          <h2>
            <AccordionButton p={"2"}>
              <Box className="dropdown-title text-[var(--cat-mocha-text)]" as="span" flex="1" textAlign="left">
                {buttonTitle}
              </Box>
              <AccordionIcon className="!text-[var(--cat-mocha-text)]"/>
            </AccordionButton>
          </h2>
          <AccordionPanel p={"0"} className="dropdown-content text-[var(--cat-mocha-text)] bg-[var(--cat-mocha-crust)]">
            {contentSection}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default NavDropdown;

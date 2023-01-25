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

const Dropdown = ({ buttonTitle, contentSection }) => {
  return (
    <div>
      <Accordion allowMultiple className='border-[var(--cat-mocha-crust)] dark:border-[var(--cat-mocha-text)] border-t-1 border-b-1'>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="text-[var(--cat-mocha-crust)] dark:text-[var(--cat-mocha-text)]" as="span" flex="1" textAlign="left">
                {buttonTitle}
              </Box>
              <AccordionIcon className="text-[var(--cat-mocha-crust)] dark:text-[var(--cat-mocha-text)]"/>
            </AccordionButton>
          </h2>
          <AccordionPanel className="text-[var(--cat-mocha-crust)] dark:text-[var(--cat-mocha-text)]">
            {contentSection}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Dropdown;

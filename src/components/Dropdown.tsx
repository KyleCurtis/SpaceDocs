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

const Dropdown = ({ buttonTitle, contentSection }: any) => {
  return (
    <div className="mx-[15%]">
      <Accordion
        allowMultiple
        className="!border-b-2 border-t-2"
        borderColor="var(--mat-deep-text)"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                className="text-[var(--cat-mocha-crust)] dark:text-[var(--cat-mocha-text)]"
                as="span"
                flex="1"
                textAlign="left"
              >
                {buttonTitle}
              </Box>
              <AccordionIcon className="text-[var(--cat-mocha-crust)] dark:text-[var(--cat-mocha-text)]" />
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

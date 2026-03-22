/*
** Accordions can have two variants:
* Single - One open at a time
* Multiple - One or more open at a time
* 
* Ids are mandatory to map to correct open state
* 
* Includes OpenByDefault option with the isOpen property. 
* Single variant will open the first item that has isOpen set to true
* Multiple variant will open all items that have isOpen set to true
*/

import clsx from "clsx";
import { HTMLAttributes, RefObject } from "react"
import { MultipleAccordion, SingleAccordion } from "./AccordionVariants";
import './_accordion.css';

type AccItem = {
  id: string;
  heading: string;
  description: string;
  isOpen?: boolean;
}

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccItem[],
  title?: string;
  variant?: 'single' | 'multiple',
  ref?: RefObject<HTMLDivElement>,
};

const Accordion = ({
  title,
  variant = "single",
  items,
  ref,
  className,
  ...props
}: AccordionProps) => {
  if (!items.length) return null;
  return (
    <section
      className={clsx(variant, className)}
      ref={ref}
      {...props}
    >
      {!!title && (
        <h2>{title}</h2>
      )}
      {
        variant === "single" ?
        (
          <SingleAccordion items={items} />
        )
        :
        (
          <MultipleAccordion items={items} />
        )
      }
    </section>
  )
}

export { Accordion }
export type { AccordionProps, AccItem }
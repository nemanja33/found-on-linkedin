"use client"
import { useState } from "react"
import { AccItem } from "./Accordion";

type MultipleItemMap = Map<string, boolean>;

const SingleAccordion = ({
  items
}: {
  items: AccItem[]
}) => {
  const getFirstOpen = items.find((i) => i.isOpen)?.id ?? ""
  const [isOpen, setIsOpen] = useState<string>(getFirstOpen);

  const toggleAccordion = (id: string) => {
    if (isOpen === id) {
      setIsOpen("");
      return;
    }
    setIsOpen(id);
  }

  return (
    <>
      {
        !!items.length && (
          <>
            {
              items.map(({id, heading, description}) => (
                <div className="acc-item" key={id}>
                  <button className="acc-header" type="button" onClick={() => toggleAccordion(id)}>
                    {heading}
                    {
                      isOpen === id ?
                      (
                        <span className="acc-icon">-</span>
                      )
                      :
                      (
                        <span className="acc-icon">+</span>
                      )
                    }
                  </button>
                  <div className="acc-body" aria-hidden={isOpen === id ? false : true}>
                    <div>
                      <p className="acc-content">{description}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </>
        )
      }
    </>
  )
}

const MultipleAccordion = ({
  items
}: {
  items: AccItem[]
}) => {
  const getAllOpen = items.filter((i) => i.isOpen);
  const m: MultipleItemMap = new Map();
  Object.values(getAllOpen).map((i) => m.set(i.id, true))
  const [isOpen, setIsOpen] = useState<MultipleItemMap>(m);

  const toggleAccordion = (id: string) => {
    setIsOpen((prev) => {
      const next = new Map(prev);
      next.set(id, !prev.get(id));
      return next;
    });
  }

  return (
    <>
      {
        !!items.length && (
          <>
            {
              items.map(({id, heading, description}) => (
                <div className="acc-item" key={id}>
                  <button className="acc-header" type="button" onClick={() => toggleAccordion(id)}>
                    {heading}
                    {
                      isOpen.get(id) ?
                      (
                        <span className="acc-icon">-</span>
                      )
                      :
                      (
                        <span className="acc-icon">+</span>
                      )
                    }
                  </button>
                  <div className="acc-body" aria-hidden={isOpen.get(id) ? false : true}>
                    <div>
                      <p className="acc-content">{description}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </>
        )
      }
    </>
  )
}


export {
  SingleAccordion,
  MultipleAccordion
}
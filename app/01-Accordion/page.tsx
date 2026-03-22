import { Accordion } from "@/components/accordion/Accordion";

const items = [
  {
    id: "1",
    heading: "item 1",
    description: "Lorem ipsum",
    isOpen: true
  },
  {
    id: "2",
    heading: "item 1",
    description: "Lorem ipsum",
    isOpen: true
  },
  {
    id: "3",
    heading: "item 1",
    description: "Lorem ipsum"
  },
]

export default function AccordionPage() {
  return (
    <div className="container">
      <Accordion title="Single Accordion" items={items} variant="single" className="mb-4" />
      <Accordion title="Multiple Accordion" items={items} variant="multiple" />
    </div>
  )
}
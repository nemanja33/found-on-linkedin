import { LibSlider } from "@/components/tabs/lib/LibSlider";

const slides = [
  `<div>
    <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg" alt="birds" />
    <div>
      <h2>Birds</h2>
      <p>Truly birds</p>
    </div>
  </div>`,
  `<div>
    <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg" alt="birds" />
    <div>
      <h2>Birds</h2>
      <p>Truly birds</p>
    </div>
  </div>`,
  `<div>
    <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg" alt="birds" />
    <div>
      <h2>Birds</h2>
      <p>Truly birds</p>
    </div>
  </div>`,
  `<div>
    <img src="https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg" alt="birds" />
    <div>
      <h2>Birds</h2>
      <p>Truly birds</p>
    </div>
  </div>`,
]

export default function TabsPage() {
  return (
    <>
      <LibSlider
        slidesPerView={2}
        slides={slides}
      />
    </>
  )
}
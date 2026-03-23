type RouteType = {
  url: string;
  name: string;
}

const Routes: RouteType[] = [
  {
    url: "/",
    name: "Home"
  },
  {
    url: "/01-Accordion",
    name: "Accordion"
  },
  {
    url: "/02-Modal",
    name: "Modal"
  },
  {
    url: "/03-Slider",
    name: "Slider"
  }
]

export {
  Routes
}

export type {
  RouteType
}
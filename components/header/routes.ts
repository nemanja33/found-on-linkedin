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
  }
]

export {
  Routes
}

export type {
  RouteType
}
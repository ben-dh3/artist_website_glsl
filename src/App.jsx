import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import OilAndWatercolourInteraction from "./pages/products/oilAndWatercolourInteraction";
import WaxAndOilInteraction from "./pages/products/waxAndOilInteraction";
import WaxAndWatercolourInteraction from "./pages/products/waxAndWatercolourInteraction";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/product1',
    element: <OilAndWatercolourInteraction />
  },
  {
    path: '/product2',
    element: <WaxAndOilInteraction />
  },
  {
    path: '/product3',
    element: <WaxAndWatercolourInteraction />
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App

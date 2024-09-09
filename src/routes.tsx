import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Default from "./layout/default";
import Cart from "./pages/cart";
import CartProfile from "./pages/cart/profile";
import Index from "./pages/index";
import OrderFailure from "./pages/order/failure";
import OrderPending from "./pages/order/pending";
import OrderSuccess from "./pages/order/success";
import Rules from "./pages/rules";
import Shop from "./pages/shop";
import Server from "./pages/shop/server";
import Team from "./pages/team";

const routeElements = [
  <Route key="routes" element={<Default />}>
    <Route path="/" element={<Index />} />
    <Route path="/shop" element={<Server />} />
    <Route path="/shop/:server" element={<Shop />} />
    <Route path="/rules" element={<Rules />} />
    <Route path="/team" element={<Team />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/cart/profile" element={<CartProfile />} />

    <Route path="/order/pending" element={<OrderPending />} />
    <Route path="/order/success" element={<OrderSuccess />} />
    <Route path="/order/failure" element={<OrderFailure />} />

    <Route
      path="/*"
      element={
        <NotFound
          title="404 Not Found"
          description="A página que você quer acessar não existe."
        />
      }
    />
  </Route>,
];

const routes = createRoutesFromElements(routeElements);
const router = createBrowserRouter(routes);

export default router;

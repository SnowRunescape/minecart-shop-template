import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Index from "./pages/index";
import Default from "./layout/default";
import Shop from "./pages/shop";
import Rules from "./pages/rules";
import Team from "./pages/team";

const routeElements = [
  <Route element={<Default />}>
    <Route path="/" element={<Index />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/rules" element={<Rules />} />
    <Route path="/team" element={<Team />} />
  </Route>
];

const routes = createRoutesFromElements(routeElements);
const router = createBrowserRouter(routes);

export default router;
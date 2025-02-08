import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import {
  ROUTES_BASENAME,
  ROUTES_PATH_ROOT,
  ROUTES_PATH_HOME,
  ROUTES_PATH_SECTOR,
  ROUTES_PATH_SEARCH
} from "../constants/routes";

import Home from "../pages/home";
import Search from "@/pages/search";

const RootNavigator = () => {
  return <Navigate to={ROUTES_PATH_HOME} />;
};

export default function () {
  return (
    <BrowserRouter basename={ROUTES_BASENAME}>
      <Routes>
        <Route path={ROUTES_PATH_HOME} element={<Home />} />
        <Route path={ROUTES_PATH_SECTOR} element={<>sector</>} />
        <Route path={ROUTES_PATH_SEARCH} element={<Search />} />
        <Route path={ROUTES_PATH_ROOT} element={<RootNavigator />} />
        <Route path='*' element={<RootNavigator />} />
      </Routes>
    </BrowserRouter>
  );
}

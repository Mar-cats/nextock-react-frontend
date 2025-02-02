import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import {
  ROUTES_BASENAME,
  ROUTES_PATH_ROOT,
  ROUTES_PATH_HOME,
  ROUTES_PATH_SECTOR
} from "../constants/routes";

const RootNavigator = () => {
  return <Navigate to={ROUTES_PATH_HOME} />;
};

export default function () {
  return (
    <BrowserRouter basename={ROUTES_BASENAME}>
      <Routes>
        <Route path={ROUTES_PATH_HOME} element={<>home</>} />
        <Route path={ROUTES_PATH_SECTOR} element={<>sector</>} />
        <Route path={ROUTES_PATH_ROOT} element={<RootNavigator />} />
        <Route path='*' element={<RootNavigator />} />
      </Routes>
    </BrowserRouter>
  );
}

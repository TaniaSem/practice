import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { UserPage } from "../pages/UserPage/UserPage";
import { SharedLayout } from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<SharedLayout />}>
        <Route path="/home" element={<UserPage />} />
      </Route>
    </Routes>
  )
};

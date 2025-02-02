import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>home</>} />
        <Route path='/about' element={<>about</>} />
      </Routes>
    </BrowserRouter>
  );
}

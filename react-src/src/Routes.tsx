import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}

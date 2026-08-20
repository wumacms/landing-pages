// src/App.tsx
// 路由入口：/ 为作品集门户首页，/sites/:id 为单个落地页
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { SiteView } from "./pages/SiteView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sites/:id" element={<SiteView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

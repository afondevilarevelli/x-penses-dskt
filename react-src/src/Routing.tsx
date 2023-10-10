import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Accounts from "./pages/accounts/Accounts";
import Transactions from "./pages/transactions/Transactions";
import CreditCards from "./pages/creditCards/CreditCards";
import Reports from "./pages/reports/Reports";
import Categories from "./pages/categories/Categories";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/credit-cards" element={<CreditCards />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

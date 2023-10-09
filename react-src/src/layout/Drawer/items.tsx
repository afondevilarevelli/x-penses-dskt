import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TuneIcon from "@mui/icons-material/Tune";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import CategoryIcon from "@mui/icons-material/Category";

export const DRAWER_ITEMS = [
  { label: "Home", route: "/", icon: <HomeIcon /> },
  { label: "Accounts", route: "/accounts", icon: <AccountBalanceIcon /> },
  {
    label: "Transactions",
    route: "/transactions",
    icon: <TuneIcon />,
  },
  {
    label: "Credit cards",
    route: "/credit-cards",
    icon: <CreditCardIcon />,
  },
  { label: "Reports", route: "/reports", icon: <SsidChartIcon /> },
  { label: "Categories", route: "/categories", icon: <CategoryIcon /> },
];

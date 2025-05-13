import { Toaster } from "react-hot-toast";
import { Header } from "./components/Header";
import { ProductPage } from "./pages/ProductPage";

export function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <ProductPage />
    </>
  );
}

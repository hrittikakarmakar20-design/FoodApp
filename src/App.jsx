import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./theme/Theme";
import { RouterProvider } from "react-router-dom";
import Routes from "./routing/Routes";
import LoginModal from "./pages/LoginModal";
import { Toaster } from "sonner";
import { Cartprovider } from "./hooks/context/cart/Cartprovider";
import { Wishlistprovider } from "./hooks/context/wishlist/Wishlistprovider";
import { AuthProvider } from "./hooks/context/Auth/AuthProvider";
import { ProductProvider } from "./hooks/context/product/ProductProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <Wishlistprovider>
            <Cartprovider>
              <Toaster position="top-left" />
              <ThemeProvider theme={Theme}>
                <CssBaseline />
                <RouterProvider router={Routes} />
              </ThemeProvider>
            </Cartprovider>
          </Wishlistprovider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;

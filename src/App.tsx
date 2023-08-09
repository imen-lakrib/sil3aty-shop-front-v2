import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_PRICE_RANGE, STORE_PRODUCTS } from "./redux/slices/productSlice";
import axios from "axios";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Layout from "./utils/Lyouat";
import MyAccount from "./pages/MyAccount";
import { AuthClient } from "./utils/Authentication";
import AccountInfo from "./pages/clientDashboard/AccountInfo";
import ChangePassword from "./pages/clientDashboard/ChangePassword";
import MyOrders from "./pages/clientDashboard/MyOrders";
import TrackMyOrder from "./pages/clientDashboard/TrackMyOrder";
import WishList from "./pages/clientDashboard/WishList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./pages/clientDashboard/CheckOut";
import Shop from "./pages/shopPage/Shop";
import CategoryPage from "./pages/CategoryPage";
import API_URL from "./routes/Api";

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await axios.get(`${API_URL}products/allProducts`);

      dispatch(STORE_PRODUCTS({ products: res.data.products }));
      dispatch(GET_PRICE_RANGE({ products: res.data.products }));
    } catch (error) {
      console.error(error);
      // handle error state here
    }
  };

  useEffect(() => {
    getData();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product-details/:id" element={<SingleProduct />} />
              <Route path="/category/:category" element={<CategoryPage />} />

              {/* client */}
              <Route
                path="/my-account/*"
                element={
                  <AuthClient>
                    <MyAccount />
                  </AuthClient>
                }
              >
                <Route path="account-info" element={<AccountInfo />} />
                <Route path="wishlist" element={<WishList />} />
                <Route path="my-orders" element={<MyOrders />} />
                <Route path="change-pw" element={<ChangePassword />} />
                <Route path="track-my-order" element={<TrackMyOrder />} />
              </Route>
              <Route
                path="/checkout"
                element={
                  <AuthClient>
                    {" "}
                    <CheckOut />
                  </AuthClient>
                }
              ></Route>
            </Routes>
          </Layout>
          <ToastContainer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

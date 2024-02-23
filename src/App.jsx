import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from "./pages/registrationPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import OtpSend from "./components/accountRecovery/otpSend.jsx";
import OtpVerifyPage from "./pages/otpVerifyPage.jsx";
import PasswordSetPage from "./pages/passwordSetPage.jsx";
import ProfilePage from "./pages/profilePage.jsx";
import RegistrationLogin from "./components/login/registrationLogin.jsx";
import {getToken} from "./helpers/SessionHelper.js";
import CreateProductPage from "./pages/createProductPage.jsx";
import ProductListPage from "./pages/productListPage.jsx";
import ProductUpdatePage from "./pages/productUpdatePage.jsx";
import OtpLoginPage from "./pages/otpLoginPage.jsx";
import KeywordPage from "./pages/keywordPage.jsx";

const App = () => {
    if (getToken()){
        return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ProductListPage/>} />
                        <Route path="/create" element={<CreateProductPage/>} />
                        <Route path="/profile" element={<ProfilePage/>} />
                        <Route path="/product/update/:id" element={<ProductUpdatePage/>} />
                        <Route path="/search/:keyword" element={<KeywordPage/>} />
                    </Routes>
                </BrowserRouter>
        );
    }else {
        return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage/>} />
                        <Route path="/registration" element={<RegistrationPage/>} />
                        <Route path="/otp/send" element={<OtpSend/>} />
                        <Route path="/otp/verify" element= {<OtpVerifyPage/>} />
                        <Route path="/set-password" element= { <PasswordSetPage/> }/>
                        <Route path="/profile" element= { <ProfilePage/> }/>
                        <Route path="/otplogin" element= { <RegistrationLogin/> }/>
                        <Route path="/otp/verification/login" element= { <OtpLoginPage/> }/>

                    </Routes>
                </BrowserRouter>
        );

    }
};

export default App;
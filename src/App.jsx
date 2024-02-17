import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from "./pages/registrationPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import OtpSend from "./components/accountRecovery/otpSend.jsx";
import OtpVerifyPage from "./pages/otpVerifyPage.jsx";
import PasswordSetPage from "./pages/passwordSetPage.jsx";
import ProfilePage from "./pages/profilePage.jsx";
import RegistrationLogin from "./components/login/registrationLogin.jsx";
import {getToken} from "./helpers/SessionHelper.js";
import MasterLayout from "./components/layouts/authLayout.jsx";

const App = () => {
    if (getToken()){
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MasterLayout/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }else {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/registration" element={<RegistrationPage/>} />
                        <Route path="/" element={<LoginPage/>} />
                        <Route path="/otp/send" element={<OtpSend/>} />
                        <Route path="/otp/verify" element= {<OtpVerifyPage/>} />
                        <Route path="/set-password" element= { <PasswordSetPage/> }/>
                        <Route path="/profile" element= { <ProfilePage/> }/>
                        <Route path="/otplogin" element= { <RegistrationLogin/> }/>

                    </Routes>
                </BrowserRouter>
            </div>
        );

    }
};

export default App;
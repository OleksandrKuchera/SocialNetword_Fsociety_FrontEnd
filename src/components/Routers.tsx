import { BrowserRouter as Router } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout/AuthLayout";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./_auth/form/LoginForm";
import RegistrationForm from "./_auth/form/RegistrationForm";
import HomeLayout from "./_root/HomeLayout/HomeLayout";
import Chat from "./_root/MessageComponents/Chat/Chat";
import Home from "./_root/HomeLayout/Home/Home";

const AppContainer = () => {
    return (
        <Router>
            <main style={{
                height: '100vh'
            }}>
                <Routes>
                    <Route element={<AuthLayout />}>
                        <Route path="/sing-in" element={<LoginForm />} />
                        <Route path="/sing-up" element={<RegistrationForm />} />
                    </Route>
                    <Route element={<HomeLayout />}>
                        <Route path="/message" element={<Chat/>} />
                        <Route path="/home" element={<Home/>} />
                        <Route path="/game" element={<Home/>} />
                    </Route>
                </Routes>
            </main>
        </Router>
    );
}

export default AppContainer;
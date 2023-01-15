import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import IsLoggedIn from "./components/isLoggedin"
import Wrapper from "./components/common/Wrapper"
import {
    Appartment,
    CreateAppartment,
    UpdateAppartment,
    Payment,
    CreatePayment,
    UpdatePayment,
    Dashboard,
    Home,
    Client,
    CreateClient,
    UpdateClient,
    PaiementCard,
    Logout,
} from "./pages/index"

function App() {
    return (
        <Router>
           
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<IsLoggedIn />}>
                        <Route element={<Wrapper />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route
                                path="/appartments"
                                element={<Appartment />}
                            />
                            <Route
                                path="/appartments/create"
                                element={<CreateAppartment />}
                            />
                            <Route 
                                path="/logout" 
                                element={<Logout />}
                             />
                           <Route
                                path="/appartments/edit/:id"
                                element={<UpdateAppartment />}
                            />
                            <Route
                                path="/clients"
                                element={<Client />}
                            />
                             <Route
                                path="/clients/create"
                                element={<CreateClient />}
                            />
                             <Route
                                path="/clients/edit/:id"
                                element={<UpdateClient />}
                            />
                            <Route path="/payments" element={<Payment />} />
                            <Route
                                path="/payments/create"
                                element={<CreatePayment />}
                            />
                            <Route
                                path="/payments/card/:id"
                                element={<PaiementCard />}
                            />
                            <Route
                                path="/payments/edit/:id"
                                element={<UpdatePayment />}
                            />
                        </Route>
                    </Route>
                </Routes>
            
        </Router>
    )
}

export default App

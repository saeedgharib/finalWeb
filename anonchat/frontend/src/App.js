import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AppContext, socket } from "./context/appContext";
import AdminPanel from "./pages/Admin";
import 'boxicons/css/boxicons.min.css';
import UsersList from "./pages/UsersList";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/CreateUser";
import Nav2 from "./components/Nav2";
import Rooms from "./pages/rooms";
import AddRooms from "./pages/AddRooms";
function App() {
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    const user = useSelector((state) => state.user);
    return (
        <AppContext.Provider  value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
            <BrowserRouter>
                {/* <Navigation /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/Create" element={<AddUser />} />
                            <Route path="/Admin" element={<AdminPanel />} />
                        </>
                    )}
                    <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                    <Route path="/Admin" element={<AdminPanel />} />
                    <Route path="/edit/:id" element={<EditUser />} />
                    <Route path="/UsersList" element={<UsersList />} />
                    <Route path="/Create" element={<AddUser />} />
                    <Route path="/addRoom" element={<AddRooms />} />
                    <Route path="/Rooms" element={<Rooms />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/Nav2" element={<Nav2 />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;

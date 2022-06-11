import './App.css';
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import {Route, Routes} from "react-router-dom";
import Map from "./components/Map/Map";
import Messages from "./components/Messenger/Messages";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

function App() {
  return (
    <>
        <HeaderContainer />
        <main className="section-main">
            <div className="side-bar">
                <div className='search-bar'>
                    <SearchBar />
                </div>
                <div className='nav-bar'>
                    <NavBar userId={'23717'}/>
                </div>
            </div>
            <section className='section'>
                <Routes>
                    <Route path='/profile/:userId' element={<ProfileContainer />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/map' element={<Map/>} />
                    <Route path='/login' element={<LoginContainer />} />
                </Routes>
            </section>
        </main>
    </>
  );
}

export default App;

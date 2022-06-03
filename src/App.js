import './App.css';
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Map from "./components/Map/Map";
import Messages from "./components/Messenger/Messages";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
  return (
    <>
        <Header />
        <main className="section-main">
            <div className="side-bar">
                <div className='search-bar'>
                    <SearchBar />
                </div>
                <div className='nav-bar'>
                    <NavBar />
                </div>
            </div>
            <section className='section'>
                <Routes>
                    <Route path='/profile' element={<ProfileContainer />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/map' element={<Map/>} />
                </Routes>
            </section>
        </main>
    </>
  );
}

export default App;

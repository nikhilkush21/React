import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Loggedin from "./Components/login.jsx";
import ColourChange from './Components/ColourChange.jsx';
import FilterItem from './Components/FilterItem.jsx';
import SigninButton from './Components/SigninButton.jsx';
import Parent from './Components/Parent.jsx';
import StudentList from './Components/StudentList.jsx';
import Posts from './Components/Posts.jsx';
createRoot(document.getElementById('root')).render(
<>
<Posts/>
</>
)

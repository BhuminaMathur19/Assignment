import NavBar from './components/NavBar';
import CodeForInterview from './components/CodeForInterview';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path="/" component={CodeForInterview}/>
    <Route path="/all" component={AllUsers}/>
    <Route  path="/add" component={AddUser}/>
    <Route  path="/edit/:id" component={EditUser}/>
    <Route component={NotFound} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
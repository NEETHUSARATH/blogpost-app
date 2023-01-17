import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPost from './Components/ViewPost';
import AddPost from './Components/AddPost';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/viewpost' exact element={<ViewPost/>}/>
      <Route path='/addpost' exact element={<AddPost/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

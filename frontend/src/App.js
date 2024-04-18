
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Base/Home';
import NavBar from './Base/NavBar';
import ReadAll from './Components/ReadAll';
import Create from './Components/Create';
import Update from './Components/Update';
import Page404 from './Components/Page404';
import FormNew from './Components/FormNew';
import DetailItem from './Components/DetailItem'


function App() {
  return (
    <>
    <NavBar />
    <Routes>
     <Route path= "/" element = {<Home />} />
     {/* CRUD */}
<Route path="/readAll" element={<ReadAll />} />
<Route path="/readOne/:id" element={<DetailItem />} />
<Route path="/create" element={<Create />} />
<Route path="/update/:id" element={<Update />} />
<Route path="/contact" element={<FormNew />} />
{/* 404 */}
<Route path="*" element={<Page404 />} />


    </Routes>
  </>
    
  );
}

export default App;

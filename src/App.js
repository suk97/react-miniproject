import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import MainHome from './components/MainHome';
import Heaundae from './pages/Haeundae';
import Jingu from './pages/Jingu';
import WishList from './components/WishList';
import Namgu from './pages/Namgu';
import Suyoung  from './pages/Suyoung';
import SearchPage  from './components/SearchPage';
import Gangseo from './pages/Gangseo';
import Gijang from './pages/Gijang';
import Yeongdo from './pages/Yeongdo';
import Saha from './pages/Saha';
import Junggu from './pages/Junggu';
import Dongnae from './pages/Dongnae';
import Yeonjae from './pages/Yeonje';
import Sasang from './pages/Sasang';

function App() {
  
    // 위시리스트 콘텐츠 id 값
  const [wishid, setWishid]=useState();
    // wishLists
  const [wishItem, setWishItem] = useState([]);
  
    // 추가 기능
  const onAdd = (myWish) => {
    setWishItem([...wishItem, myWish]);
  };

  // 삭제(중복 방지) 및 하트 유지
  const onDelete = (newwish) => {
    const filteredItem = wishItem.filter(item => item.Id !== newwish.Id);
    setWishItem(filteredItem);
  }
  
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<MainHome/>} />
        <Route path='/wishList' element={<WishList wishid={wishid} wishItem={wishItem} />} /> 
        <Route path='/heaundae' element={<Heaundae setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />} />
        <Route path='/jingu' element={<Jingu setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />} /> 
        <Route path='/namgu' element={<Namgu setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />} /> 
        <Route path='/suyoung' element={<Suyoung setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />} /> 
        <Route path='/gangsegu' element={<Gangseo setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />} /> 
        <Route path='/gijanggun' element={<Gijang setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />} /> 
        <Route path='/yeongdo' element={<Yeongdo setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />} /> 
        <Route path='/sahagu' element={<Saha setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem}/>} /> 
        <Route path='/junggu' element={<Junggu setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />}  /> 
        <Route path='/donglae' element={<Dongnae setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />} /> 
        <Route path='/yeanjaegu' element={<Yeonjae setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />} /> 
        <Route path='/sasanggu' element={<Sasang setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />} /> 
        <Route path='/search' element={<SearchPage/>} />    
      </Routes>
    </Router>
   
    </>
  );
}

export default App;

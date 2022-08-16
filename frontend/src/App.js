// CSS 파일을 import
import './App.css';

// react-router-dom 라이브러리에서 BrowserRouter, Routes, Route 태그를 import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Route 태그를 사용하여 페이지 컴포넌트를 App.js에 연결
import Mainpage from './pages/Mainpage';
import Contents from './components/Contents';
import Loading from './pages/Loading';
import CharactersInfo from './components/CharactersInfo';
import WeaponsInfo from './components/WeaponsInfo';
import Appbar from './components/Appbar';
import Introduce from './pages/Introduce';

import Test from './test/InfiniteScrollPage';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<div className='main-outer'>
					<Appbar/>

					<Routes>
						<Route path="/" element={<Mainpage/>}/>
						<Route path="/characters" element={<CharactersInfo/>}/>
						<Route path="/weapons" element={<WeaponsInfo/>}/>
						<Route path="/:datas" element={<Contents/>}/>
						<Route path="/introduce" element={<Introduce/>}/>
						<Route path="/loading" element={<Loading/>}/>

						<Route path="/test" element={<Test/>}/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;

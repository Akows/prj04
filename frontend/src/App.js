// CSS 파일을 import
import './App.css';

// react-router-dom 라이브러리에서 BrowserRouter, Routes, Route 태그를 import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Route 태그를 사용하여 페이지 컴포넌트를 App.js에 연결
import Mainpage from './pages/Mainpage';
import Contents from './components/Contents';
import Loading from './pages/Loading';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Mainpage/>}/>
					<Route path="/:datas" element={<Contents/>}/>

					<Route path="/test" element={<Loading/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;

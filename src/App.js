import { Route, Routes } from 'react-router-dom';
import './App.css';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Welcome from './Pages/Welcome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </>
  );
}

export default App;

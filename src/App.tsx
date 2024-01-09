import './App.css';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import Overview from './components/Overview';
import Transaction from './components/Transaction';

function App() {

  return (
    <div className='grid grid-cols-12 h-screen'>
      <div className='bg-[#1f2641] col-span-2 h-full text-white'>
        <Sidebar />
      </div>
      <div className='col-span-10 bg-slate-900'>
        <NavBar />
        <div>
          <Overview/>
          <Transaction/>
        </div>
      </div>

      </div>
  )
}

export default App

import { React, useState } from 'react';
import './App.css';
import RunewordBases from './components/runewordBases';
import './components/tables';
import Navigation from './components/navigation';
import Home from './components/home';
import FloatingActionButton from './components/floatingActionButton';
import CubeRecipes from './components/cubeRecipes';

function App() {
  const [page, setPage] = useState(0);
  const renderCurrentPage = () => {
    switch (page){
      case 1: 
        return <RunewordBases />;
      case 2: 
        return <CubeRecipes />;
        
      default:
        return <Home />

    }
  }

  return (
    <div className="App">
      <main>
        <Navigation currentPage={page} onSetPage={setPage} />
        <section className="container">
          {renderCurrentPage()}  
        </section>
        <FloatingActionButton />
      </main>
      <footer className='footer d-flex justify-content-center'>
        <span className='align-self-center'>&copy; 2021 Crazyloon Productions</span>
      </footer>      
    </div>
  );
}

export default App;

import { NeedToKnowTable } from './tables';
import { weaponRunewords, armorRunewords, helmetRunewords, shieldRunewords } from '../data/tableData';

var RunewordBases = () => {
return (
        <>
          <div className="text-center mt-5">
            <button href="#" className="nav-btn px-2 mx-2" onClick={() => scrollTo('bases-weapon')}>Weapon Bases</button>
            <button href="#" className="nav-btn px-2 mx-2" onClick={() => scrollTo('bases-armor')}>Armor Bases</button>
            <button href="#" className="nav-btn px-2 mx-2" onClick={() => scrollTo('bases-helmet')}>Helmet Bases</button>
            <button href="#" className="nav-btn px-2 mx-2" onClick={() => scrollTo('bases-shield')}>Shield Bases</button>
          </div>
          <div>
            <h2 id="bases-weapon" className="c-orange mt-5">Weapon Runewords and their Recommended Bases</h2>
            <NeedToKnowTable tableData={weaponRunewords}/>
    
            <h2 id="bases-armor" className="c-orange mt-5">Armor Runewords and their Recommended Bases</h2>
            <NeedToKnowTable tableData={armorRunewords}/>
    
            <h2 id="bases-helmet" className="c-orange mt-5">Helmet Runewords and their Recommended Bases</h2>
            <NeedToKnowTable tableData={helmetRunewords}/>
    
            <h2 id="bases-shield" className="c-orange mt-5">Shield Runewords and their Recommended Bases</h2>
            <NeedToKnowTable tableData={shieldRunewords}/>
          </div>
        </>
  );
}

function scrollTo(element){
  let target = document.getElementById(element);
  let posY = target.getBoundingClientRect().y;
  window.scrollTo({top: posY, behavior: 'smooth'});
}

export default RunewordBases;
import { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState(false)
  function changeColor() {
    setBackgroundColor(!backgroundColor)      
  }
  const [toggle, setToggle] = useState(false)
  function changeDisplaySize() {
    setToggle(!toggle)      
  }  

  const [fontSize, setFontSize] = useState('18px')
  function changeFontSize(e){
    console.log(e.target.id)
    if (e.target.id ==='btnSmall'){
      setFontSize('8px')
    }
    if (e.target.id ==='btnmedia'){
      setFontSize('24px')
    }
    if (e.target.id === 'btnbig'){
      setFontSize('38px')
    }    
  }

  return (
    <div className="App">
              <div className='container'>
                <header className='headerArea'>
                  <button className='btn' onClick={changeColor}>Alterar cor</button>
                  <button id='btnSmall' className='btn' onClick={changeFontSize}>Fonte Pequena</button>
                  <button id='btnmedia' className='btn'onClick={changeFontSize}>Fonte Media</button>
                  <button id='btnbig' className='btn'onClick={changeFontSize}>Fonte Grande</button>
                  <button className='btn' onClick={changeDisplaySize}>Altera Tamanho</button>                   
                </header>
                <section className='sectionToggle'style={{display: toggle && 'flex'}}>
                    <p>Area de exemplo para espaço que alterna</p>
                </section>
                <div className='content' style={{backgroundColor: backgroundColor && 'black'}}>
                  <h2 style={{fontSize: fontSize}} >ALTERANDO O TAMANHO DAS FONTES</h2>
                </div>
              </div>
    </div>
  );
}

export default App;

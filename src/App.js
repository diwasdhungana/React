import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navBar">       
          <h1 id="Cmart">Crypto Mart</h1>            
      </div>

      <div className='popular'>
        <div className='pop1'>
          
          <div className="pop_img"><img id='gun' src='./img/glock.jpg'></img></div>  
          <div className="popcontent">
            <h6>Glock G-19</h6><br />
            <p className='Subt'>This is Glock G_19 limited addition. It can help u get rid from your annoying neighbours.</p>
            
            </div>     
        </div>
        <div className='pop1'>       
        </div>
        <div className='pop1'>       
        </div>
        <div className='pop1'>       
        </div>

      </div>
          
    </div>
  );
}

export default App;

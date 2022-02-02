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
            <hr />
            <div className='Iname'><pre id='Name' >Glock G-19</pre></div>
            <div className='Itype'>Guns/Amunations</div>
            <table width='100%'>
            <tr>
              <td className='Irating'>Rating: 4.5/5 </td>
              <td className='Iprice' align='right'>-/$1,000 </td>
            </tr>
            </table>
           
            <p className='Ides'>This is Glock G_19 limited addition. It can help u get rid from your annoying neighbours.</p>
         </div>     
        </div>
{/* seperation */}
        <div className='pop1'>    
        <div className="pop_img"><img id='gun' src='./img/meth.jpg'></img></div>  
          <div className="popcontent">
            <hr />
            <div className='Iname'><pre id='Name' >Say My Name</pre></div>
            <div className='Itype'>Entertainment</div>
            <table width='100%'>
            <tr>
              <td className='Irating'>Rating: 4.5/5 </td>
              <td className='Iprice' align='right'>-/$1,000 </td>
            </tr>
            </table>
           
            <p className='Ides'>Can't say, Coz we haven't tried yet.</p>
         </div>      
        </div>
{/* seperation */}
        <div className='pop1'>   
        <div className="pop_img"><img id='gun' src='./img/steroids.jpg'></img></div>  
          <div className="popcontent">
            <hr />
            <div className='Iname'><pre id='Name' >Steroids for your mind and memory</pre></div>
            <div className='Itype'>Medicine</div>
            <table width='100%'>
            <tr>
              <td className='Irating'>Rating: 4.5/5 </td>
              <td className='Iprice' align='right'>-/$1,000 </td>
            </tr>
            </table>
           
            <p className='Ides'>Imported steroids! it just works</p>
         </div> 
        </div>
{/* seperation */}
        <div className='pop1'>  
        <div className="pop_img"><img id='gun' src='./img/weed.jpg'></img></div>  
          <div className="popcontent">
            <hr />
            <div className='Iname'><pre id='Name' >High Quality Cultivation Mountain Weed</pre></div>
            <div className='Itype'>Medicine</div>
            <table width='100%'>
            <tr>
              <td className='Irating'>Rating: 4.5/5 </td>
              <td className='Iprice' align='right'>-/$1,000 </td>
            </tr>
            </table>
           
            <p className='Ides'>Very high Quality Weed from himalaya. hand picked and dust free.</p>
         </div>      
        </div>
{/* seperation */}

      </div>
          
    </div>
  );
}

export default App;

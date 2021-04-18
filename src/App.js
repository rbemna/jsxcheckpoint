import './Style.css';
import image from './imageInSrc.jpg'
function App() {
  return (
    <div className="App">

      <div  style={{border:'solid 1px black', maxWidth:'100vw'}}>
      <h1 className="title red">Rbii Emna</h1>

      <br/>

      <img className="photo"  src={image} alt="fower1"/>

      <br/>

      <img className="photo"  src="/imageInPublic.jpg" alt="flower2"/>

      </div>
     
      <video width="320" height="240" controls>

      <source src="/myVideo.mp4" type="video/mp4"/>

      </video>

    

    




    </div>
  );
}

export default App;

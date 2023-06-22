import './style.css';
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Nav from "./components/Nav/Nav.js";
import Home from "./page/Home/Home.js";

function App() {
    function reproduzVideo(){
        alert("O vídeo está sendo reproduzido.")
      }

  return (
  <>
  
  <body>
    <div class="tela-inteira">

        <Header/>

    <main>
        <Nav/>

        <Home reproduz={reproduzVideo}/>
        </main>
    </div>

      <Footer/>

</body>


  </>
  );
}

export default App;

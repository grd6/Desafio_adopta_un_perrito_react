import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./assets/components/MyCard";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
    <div className="main">
      <Header title="Adopta un Perrito" />
      <div className="galeria">
        <MyCard
          cardImg="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg"
          cardTitle="Anastacia"
          cardText="famosos por su inteligencia y fácil adiestramiento."
          bgBadge="success"
          textBadge="Caniche"
        />
        <MyCard
          cardImg="https://images.pexels.com/photos/1933464/pexels-photo-1933464.jpeg"
          cardTitle="El Papi"
          cardText="Son perros pequeños y sólidos, además de equilibrados "
          bgBadge="primary"
          textBadge="Bichon"
        />
        <MyCard
          cardImg="https://images.pexels.com/photos/15347387/pexels-photo-15347387/free-photo-of-resfriado-invierno-animal-montana.jpeg"
          cardTitle="Dr alito"
          cardText="Estos perros robustos y atrevidos son afables"
          bgBadge="danger"
          textBadge="Beagle suizo"
          />
        <MyCard
          cardImg="https://images.pexels.com/photos/69372/pexels-photo-69372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          cardTitle="Camila"
          cardText="Sofisticado y de aspecto delicado"
          bgBadge="warning"
          textBadge="Papillón"
          
          />
      </div>
      <Footer
        footerText="Explora nuestra galeria de adopcion de perritos para encontrar a tu compañero
        perfecto. Tenemos una gran variedad de perros con diferentes personalidades y tamaños,
        todos en busca de un hogar amoroso. Cada imagen captura su esencia unica."
        />
</div>        
    </>
  );
}

export default App;

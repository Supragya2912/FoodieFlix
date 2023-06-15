
import Navbar from './components/Navbar';
import Card from './components/Card';
import Carousel from './components/Carousel'


function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>

  );
}

export default App;

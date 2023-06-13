
import Navbar from './components/Navbar';
import Card from './components/Card';
import Carousel from './components/Carousel';

function App() {

  const slides = ['Slide 1', 'Slide 2', 'Slide 3'];
  return (
    <div className="App">
    <Navbar/>
    <Carousel slides={slides}/>
    <Card/>
    </div>
  );
}

export default App;

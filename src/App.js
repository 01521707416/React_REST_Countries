import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(response => response.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1 className='header'>Exoloring all the countries of the world.</h1>
//       <h3 className='header'>Available countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div className='country'>
//       <h3>Name: {props.name}</h3>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;

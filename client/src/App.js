import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import BookListItems from './components/BookListItems';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <BookListItems/>
    </div>
  );
}

export default App;

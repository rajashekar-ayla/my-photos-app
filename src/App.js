import './App.css';
import Header from './components/Header';
import PhotosList from './components/PhotosList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <PhotosList />
      </div>
    </Provider>
  );
}

export default App;

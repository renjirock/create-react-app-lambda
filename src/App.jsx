import Navigation from './components/Navigation';
import Masthead from './components/Masthead';
import Form from './components/Form';

function App() {
  const login = localStorage.getItem("login");
  return (
    <div className="App" id="page-top">
      <Navigation></Navigation>
      {login === null ? <Masthead/> : ''}
      {login === 'true' ? <Form/> : ''}
    </div>
  );
}

export default App;

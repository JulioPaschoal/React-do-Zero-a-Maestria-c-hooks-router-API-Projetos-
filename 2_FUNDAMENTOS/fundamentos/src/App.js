//components
import FirstComponent from './components/FirstComponent';
import TempleteExpressions from './components/TemplateExpressions';
import Events from './components/Events';

//styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TempleteExpressions />
      <Events />
    </div>
  );
}

export default App;

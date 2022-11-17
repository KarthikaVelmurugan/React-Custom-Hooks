import './App.css';
import useModal from './Hooks/useModal';
import ModalBox from './CustomModalBox';

function App() {
  const { visible, toggle } = useModal()
  return (
    <div className="App">
      <button className="btn-default" onClick={toggle}>Show Modal</button>
      <ModalBox visible={visible} toggle={toggle} />
    </div>
  );
}

export default App;

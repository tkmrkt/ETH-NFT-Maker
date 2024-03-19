import './App.css';
import NftUploader from './components/NftUploader/NftUploader';
const contract_address = '0x4F7e7E5278F3d070270244EFda1F7fceC7A5b673';

function App() {

  return (
    <div className='App'>
      <NftUploader></NftUploader>
    </div>
  );
}


export default App;
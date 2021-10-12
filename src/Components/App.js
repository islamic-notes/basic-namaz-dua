// the homepage/ main page of the app

import '../Styles/antd.css';
import '../Styles/App.css';

import { Button } from 'antd'; // test

function App() {
  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + '/img/logo192.png'} />
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;

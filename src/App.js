import logo from './plantsinwindow.gif';
import './App.css';

function App() {
  const callMotor1 = async () => {
    try {
      const response = await fetch('http://arturohouse.tplinkdns.com:8001/motor');
      //const data = await response.json();
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
      await callMotor1()
    }
  };

  const callMotor2 = async () => {
    try {
      const response = await fetch('http://arturohouse.tplinkdns.com:8001/motor2');
      console.log("RESPUESTA ", response)
      //const data = await response.json();
      console.log("HOLA", response);
    } catch (error) {
      console.error('Error:', error);
      await callMotor2()
    }
  };
  //const streamStyle = {display:"block", "-webkit-user-select": "none", "margin": "auto"}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo"/>
        <p>
          Salvando a una planta de su madre ausente.
        </p>
        <button onClick={callMotor1}>Aguita pa Darky</button>
        <button onClick={callMotor2}>Aguita pa Manolo</button>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Chart from './components/Charts/Charts'
import Areachart from './components/Charts/Areachart';
import Table from './components/Table/Table';
import Widget from './components/Widget/Widget';

function App() {


  return (
    <>
      <Navbar />
      <div className='menu-item'>
        <div className="charts-container">
          <div className="pie">
            <Widget/>
          </div>
          <div className='graph'>
            <Areachart />
            <Chart />
            <Table />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;

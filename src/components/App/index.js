import Header from '../Header';
import Banner from '../Banner';
import Row from '../Row';
import Request from '../../api/request';

function App() {
  return (
  <div className="App">
    <Header />

    <Banner />
    <Row title="Trending Now" request={Request.TRENDING} />
  </div>
  );
}

export default App;

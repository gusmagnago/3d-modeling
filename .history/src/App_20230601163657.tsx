import { Layout } from './components/layout/Layout';
import { Navigation } from './components/navigation/Navigation';

function App() {
  return <Layout navigation={<Navigation />} content={undefined} />;
}

export default App;

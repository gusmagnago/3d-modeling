import React from 'react';
import { Layout } from './components/layout/Layout';
import { Navigation } from './components/navigation/Navigation';

const Content = React.lazy(() => import('./components/content/Content'));

function App() {
  return <Layout navigation={<Navigation />} content={<Content />} />;
}

export default App;

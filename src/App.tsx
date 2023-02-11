import React from 'react';
import { useRoutes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './pages/home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <Navigation />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'page1', element: <Page1 /> },
      { path: 'page2', element: <Page2 /> },
      { path: 'page3', element: <Page3 /> },
    ],
  };

  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
};

export default App;

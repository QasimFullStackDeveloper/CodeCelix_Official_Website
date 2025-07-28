import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFound from './components/NotFound.jsx';
import Home from './components/Home.jsx';
import ContactDetail from './components/ContactDetail.jsx';
import PrivacyAndPolicy from './components/PrivacyAndPolicy.js';
import ServicesDetail from './components/ServicesDetail.jsx';
import PortfolioDetail from './portfolio/PortfolioDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <ServicesDetail />,
      },
      {
        path: '/portfolio',
        element: <PortfolioDetail />,
      },
      {
        path: '/contact',
        element: <ContactDetail />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyAndPolicy />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);

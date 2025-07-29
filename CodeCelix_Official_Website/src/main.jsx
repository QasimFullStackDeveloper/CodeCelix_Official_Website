import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFound from './components/NotFound.jsx';
import Home from './home/Home.jsx';
import AboutDetail from './about/AboutDetail.jsx';
import ServicesDetail from './services/ServicesDetail.jsx';
import PortfolioDetail from './portfolio/PortfolioDetail.jsx';
import ContactDetail from './contact/ContactDetail.jsx';
import PrivacyAndPolicy from './components/PrivacyAndPolicy.js';
import TermAndConditionPage from './term&condition/Term_and_ConditionPage.jsx';

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
        path: '/about',
        element: <AboutDetail />,
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
      {
        path: '/terms-and-conditions',
        element: <TermAndConditionPage />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);

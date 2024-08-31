import { useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/view/:id", element: <ViewCreator /> },
    { path: "/add", element: <AddCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
  ]);

  return (
    <div>
      <Navbar />
      {routes}
    </div>
  );
}

export default App;

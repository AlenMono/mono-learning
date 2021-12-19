import './app.css';
import {
    BrowserRouter as Router,
    useRoutes,
} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';

const MovieApp = () => {
    let routes = useRoutes([
        { path: "/", element: <Dashboard /> },
    ]);

    return routes;
};

function App() {
    return (
        <div className="app">
            <Router>
                <MovieApp />
            </Router>
        </div>
    );
}

export default App;

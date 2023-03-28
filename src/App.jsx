import { createRoot } from 'react-dom/client';
import Login from './Login';
import SearchParams from './SearchParams';
import SignUp from './SignUp';

const App = () => {
    return (
        <div>
            <h1>Koo Koo Drew!</h1>
            <Login />
            <SignUp />
            <SearchParams />
        </div>
    );
};


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/ >);
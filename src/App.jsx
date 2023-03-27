import { createRoot } from 'react-dom/client';
import Login from './Login';
import SignUp from './SignUp';

// const App = () => {
//     <div>
//         <h1>Koo Koo Drew!</h1>
//         <Review
//             establishment="Dave's Hot Chicken"
//             address="OG Western Ave Location"
//             description="parking lot pop up turned huge hot chicken chain"
//             body="Always fire, sauce is bomb. Would be five stars but quality of chicken breasts is not very high"
//             rating="CHICKEN_CHICKEN_CHICKEN_CHICKEN"
//             reviewer="Koo Koo Drew"
//                 />
//     </div>
// }

const App = () => {
    return(
        <div>
            <h1>Koo Koo Drew!</h1>
            <Login />
            <SignUp />
        </div>
    )
}

        const container = document.getElementById('root');
        const root = createRoot(container);
        root.render(<App/ >);
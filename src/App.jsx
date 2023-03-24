import React from 'react';
import ReactDOM from 'react-dom';


const Review = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.establishment),
        React.createElement("h3", {}, props.address),
        React.createElement("h3", {}, props.description),
        React.createElement("h3", {}, props.body),
        React.createElement("h3", {}, props.rating)
    ])
} 

const App = () => {
            return React.createElement(
                "div", 
                {}, [
                    React.createElement("h1", {}, "Koo Koo Drew!"),
                    React.createElement(Review, {
                        establishment: "Dave's Hot Chicken",
                        address: "OG Western Ave Location",
                        description: "parking lot pop up turned huge hot chicken chain",
                        body: "Always fire, sauce is bomb. Would be five stars but quality of chicken breasts is low",
                        rating: "CHICKEN_CHICKEN_CHICKEN_CHICKEN"
                    } ),
                    React.createElement(Review),
                    React.createElement(Review)
                ]
            )
        };

        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(React.createElement(App));
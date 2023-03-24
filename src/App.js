const Review = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Restaurant"),
        React.createElement("h3", {}, "Address"),
        React.createElement("h3", {}, "Description"),
        React.createElement("h3", {}, "Review"),
        React.createElement("h3", {}, "Rating")
    ])
} 

const App = () => {
            return React.createElement(
                "div", 
                {}, [
                    React.createElement("h1", {}, "Koo Koo Drew!"),
                    React.createElement(Review),
                    React.createElement(Review),
                    React.createElement(Review)
                ]
            )
        };

        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(React.createElement(App));
// Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Tests
import reportWebVitals from "./tests/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
reportWebVitals();

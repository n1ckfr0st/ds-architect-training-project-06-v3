import React from "react";
import { GlobalStyle } from "./lib/theme";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme";
import { Card, Badge, Button, InputText, Modal } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Modal />
			</main>
		</ThemeProvider>
	);
}

export default App;

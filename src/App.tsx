import React from "react";
import { GlobalStyle } from "./lib/theme";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./lib/theme";
import { Button } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Button 
					iconBefore="options"
					disabled
					appearance="secondary" 
					size="xl"
					text="Опции" 
				/>
				<Button 
					iconBefore="download"
					appearance="primaryBase" 
					size="xl"
					text="Скачать" 
				/>
				<Button 
					iconAfter="chevronRight"
					appearance="secondary" 
					size="xl"
					text="Скачать" 
				/>
				<Button 
					iconBefore="options"
					appearance="secondary" 
					size="xs"
					text="Опции" 
				/>
				<Button 
					iconBefore="download"
					appearance="primaryBase" 
					size="xs"
					text="Скачать" 
				/>
				<Button 
					iconAfter="chevronRight"
					disabled
					appearance="secondary" 
					size="xs"
					text="Скачать" 
				/>
			</main>
		</ThemeProvider>
	);
}

export default App;

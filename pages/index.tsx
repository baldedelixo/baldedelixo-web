import { ThemeProvider } from 'styled-components'

import * as S from 'styles/index'
import { homeTheme } from "styles/themes"

export default function Home() {
	return (
		<ThemeProvider theme={homeTheme}>
			<S.Title>Olá, mundo!</S.Title>
		</ThemeProvider>
	)
}
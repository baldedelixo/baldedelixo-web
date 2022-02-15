import { ThemeProvider } from 'styled-components'

import * as S from 'styles/index'
import { homeTheme } from "styles/themes"

export default function Home() {
	const [message, setMsg] = useState('Hello, world!');
	
	useEffect(() => {
		fetch("https://baldedelixo-api.herokuapp.com").
		then(r => r.text()).
		then(msg => {
			setMsg(msg);
		});
	}, []);
	return (
		<ThemeProvider theme={homeTheme}>
			<S.Title>{message}</S.Title>
		</ThemeProvider>
	)
}

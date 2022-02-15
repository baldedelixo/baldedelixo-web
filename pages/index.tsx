import { ThemeProvider } from 'styled-components'
import { useState, useEffect } from 'react'

import * as S from 'styles/index'
import { homeTheme } from "styles/themes"

export default function Home() {
	const [message, setMsg] = useState('Hello, world!');
	const [name, setName] = useState('world');


	useEffect(() => {
		fetch(`https://baldedelixo-api.herokuapp.com/?name=${name}`).
		then(r => r.json()).
		then(data => {
			setMsg(data.message)
		}).
    catch(e => {
        console.log(e)
      });
	}, [name]);

	return (
    <ThemeProvider theme={homeTheme}>
      <S.Background>
        <input placeholder="Type your name" type="text" onChange={e => setName(e.target.value)}/>
        <S.Title>{message}</S.Title>
      </S.Background>
		</ThemeProvider>
	)
}

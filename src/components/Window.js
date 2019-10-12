import React from 'react'
import styled from 'styled-components'
import { Divider, Grid } from 'semantic-ui-react'
import Info from './Info'

const A = styled.div`
  background-color: white;
  padding: 10px;

  font-family: 'Roboto', sans-serif;
`
const Header = styled.h3`
  font-family: 'Roboto', sans-serif;
  margin-top: '15px';
  margin-bottom: '-15px';
`

const Window = ({ name, aktualni, numbers }) => (
  <A>
    <Header>{name}</Header>
    <Divider></Divider>
    <Grid>
      <Grid.Row>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Prihlaseni uzivatele' : 'Uspesna prihlaseni'}
            number={numbers[0].number}
            color={numbers[0].color}
          ></Info>
        </Grid.Column>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Aktivnich spojeni' : 'Neuspesna prihlaseni'}
            number={numbers[1].number}
            color={numbers[1].color}
          ></Info>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Aktivni uzivatele' : 'Zmena hesla'}
            number={numbers[2].number}
            color={numbers[2].color}
          ></Info>
        </Grid.Column>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Smazani uzivatelu' : 'Resetovani hesla'}
            number={numbers[3].number}
            color={numbers[3].color}
          ></Info>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Typy roli uzivatelu' : 'Vytvorenych Uzivatelu'}
            number={numbers[4].number}
            color={numbers[4].color}
          ></Info>
        </Grid.Column>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Celkem Uzivatelu' : 'Smazanych uzivatelu'}
            number={numbers[5].number}
            color={numbers[5].color}
          ></Info>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </A>
)
export default Window

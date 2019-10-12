import React from 'react'
import styled from 'styled-components'
import { Divider, Grid } from 'semantic-ui-react'
import Info from './Info'

const WindowStyle = styled.div`
  background-color: white;
  padding: 10px;

  font-family: 'Roboto', sans-serif;
`
const Header = styled.h3`
  font-family: 'Roboto', sans-serif;
  margin-top: '15px';
  margin-bottom: '-15px';
`
//Simple component just to pass information down to info component . Creates window on the main screen. Writing numbers are not perfect but I didnt know where should I get those informations
const Window = ({ name, aktualni, numbers }) => (
  <WindowStyle>
    <Header>{name}</Header>
    <Divider></Divider>
    <Grid>
      <Grid.Row>
        <Grid.Column width="8">
          {/*simple if(aktualni) Prihlaseni uzivatele
                     else Uspesna prihlaseni           
              */}
          <Info
            text={aktualni ? 'Přihlašení uživatele' : 'Uspěšné přihlášení'}
            number={numbers[0].number}
            color={numbers[0].color}
          ></Info>
        </Grid.Column>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Aktivních spojení' : 'Neuspěsná přihlášení'}
            number={numbers[1].number}
            color={numbers[1].color}
          ></Info>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Aktivní uživatelé' : 'Změna hesla'}
            number={numbers[2].number}
            color={numbers[2].color}
          ></Info>
        </Grid.Column>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Smazání uživatelů' : 'Resetováni hesla'}
            number={numbers[3].number}
            color={numbers[3].color}
          ></Info>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Typy roli uživatelů' : 'Vytvořenych Uživatelu'}
            number={numbers[4].number}
            color={numbers[4].color}
          ></Info>
        </Grid.Column>
        <Grid.Column width="8">
          <Info
            text={aktualni ? 'Celkem Uživatelu' : 'Smazaných uživatelu'}
            number={numbers[5].number}
            color={numbers[5].color}
          ></Info>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </WindowStyle>
)
export default Window

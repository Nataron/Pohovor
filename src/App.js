import React, { Fragment } from 'react'
import { Container, Grid, Icon, Button } from 'semantic-ui-react'
import styled from 'styled-components'

import Window from './components/Window'
import Upozorneni from './components/Alert'
import Aktivita from './components/Activity'

import WindowWithGraph from './components/WindowWithGraph'
import {
  data,
  actualNumbers,
  lastNumbers,
  optionsData,
  alertText,
  tableData,
} from './data/data'

const Div = styled.div`
  margin-left: 10px;
`

class App extends React.Component {
  state = { optionsState: optionsData }

  handleChange = (clickedButton, isAdd) => () => {
    const { optionsState } = this.state
    var options

    options = optionsState.find(item => item.name === clickedButton)
    if (isAdd) options.y = options.y + 1
    else options.y = options.y - 1
    console.log(options)

    this.setState({ optionsState: optionsState })
  }

  render() {
    const { optionsState } = this.state
    return (
      <Fragment>
        <Container style={{ backgroundColor: '#fff2e6' }}>
          <Icon style={{ padding: '10px' }} name="user outline">
            Uzivatele
          </Icon>
          <Grid columns={15}>
            <Grid.Row>
              <Grid.Column width="5">
                <Div>
                  <Window
                    numbers={actualNumbers}
                    aktualni={true}
                    name="Aktualni stav"
                  />
                </Div>
              </Grid.Column>
              <Grid.Column width="5">
                <Div>
                  <Window
                    numbers={lastNumbers}
                    name="Od posledniho prihlaseni"
                  />
                </Div>
              </Grid.Column>
              <Grid.Column width="5">
                <Div>
                  <WindowWithGraph data={data} optionsData={optionsState} />
                </Div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="5">
                <Div>
                  <Upozorneni upozorneni={alertText} />
                </Div>
              </Grid.Column>
              <Grid.Column width="10">
                <Div>
                  <Aktivita tableData={tableData} />
                </Div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="2">
                <Button
                  name="addAdmin"
                  onClick={this.handleChange('Admin', true)}
                >
                  Add Administrator
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="RemoveAdmin"
                  onClick={this.handleChange('Admin', false)}
                >
                  Remove Admin
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="addUzivatel"
                  onClick={this.handleChange('Uzivatel', true)}
                >
                  Add Uzivatel
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="RemoveUser"
                  onClick={this.handleChange('Uzivatel', false)}
                >
                  Remove User
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="addManager"
                  onClick={this.handleChange('Manazer', true)}
                >
                  Add Manager
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="RemoveManager"
                  onClick={this.handleChange('Manazer', false)}
                >
                  Remove Manager
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="addAuditor"
                  onClick={this.handleChange('Auditor', true)}
                >
                  Add Auditor
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="RemoveAiditor"
                  onClick={this.handleChange('Auditor', false)}
                >
                  Remove Auditor
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Fragment>
    )
  }
}

export default App

import React, { Fragment } from 'react'
import { Container, Grid, Icon, Button } from 'semantic-ui-react'
import styled from 'styled-components'

import Window from './components/Window'
import Upozorneni from './components/Upozorneni'
import Aktivita from './components/Aktivita'

import WindowWithGraph from './components/WindowWithGraph'
import {
  data,
  aktualniNumbers,
  posledniNumbers,
  optionsData,
  UpozorneniText,
  tableData,
} from './data/data'

const Div = styled.div`
  margin-left: 10px;
`

class App extends React.Component {
  state = { optionsState: optionsData }
  handleChange = clickedButton => () => {
    const { optionsState } = this.state
    var options
    switch (clickedButton) {
      case 'addAdmin':
        options = optionsState.find(item => item.name === 'Admin')
        options.y = options.y + 1

        this.setState({ optionsState: optionsState })
        break
      case 'RemoveAdmin':
        options = optionsState.find(item => item.name === 'Admin')
        if (options.y > 0) options.y = options.y - 1
        this.setState({ optionsState: optionsState })
        break
      case 'AddUzivatel':
        options = optionsState.find(item => item.name === 'Uzivatel')
        options.y = options.y + 1
        this.setState({ optionsState: optionsState })
        break
      case 'RemoveUzivatel':
        options = optionsState.find(item => item.name === 'Uzivatel')
        if (options.y > 0) options.y = options.y - 1
        this.setState({ optionsState: optionsState })
        break
      case 'AddManager':
        options = optionsState.find(item => item.name === 'Manazer')
        options.y = options.y + 1
        this.setState({ optionsState: optionsState })
        break
      case 'RemoveManager':
        options = optionsState.find(item => item.name === 'Manazer')
        if (options.y > 0) options.y = options.y - 1
        this.setState({ optionsState: optionsState })
        break
      case 'AddAuditor':
        options = optionsState.find(item => item.name === 'Auditor')
        options.y = options.y + 1
        this.setState({ optionsState: optionsState })
        break
      case 'RemoveAuditor':
        options = optionsState.find(item => item.name === 'Auditor')
        if (options.y > 0) options.y = options.y - 1
        this.setState({ optionsState: optionsState })
        break
      default:
        break
    }
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
                    numbers={aktualniNumbers}
                    aktualni={true}
                    name="Aktualni stav"
                  />
                </Div>
              </Grid.Column>
              <Grid.Column width="5">
                <Div>
                  <Window
                    numbers={posledniNumbers}
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
                  <Upozorneni upozorneni={UpozorneniText} />
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
                <Button name="addAdmin" onClick={this.handleChange('addAdmin')}>
                  Add Administrator
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="RemoveAdmin"
                  onClick={this.handleChange('RemoveAdmin')}
                >
                  Remove Admin
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="addUzivatel"
                  onClick={this.handleChange('AddUzivatel')}
                >
                  Add Uzivatel
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="RemoveUser"
                  onClick={this.handleChange('RemoveUzivatel')}
                >
                  Remove User
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="addManager"
                  onClick={this.handleChange('AddManager')}
                >
                  Add Manager
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="RemoveManager"
                  onClick={this.handleChange('RemoveManager')}
                >
                  Remove Manager
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="addAuditor"
                  onClick={this.handleChange('AddAuditor')}
                >
                  Add Auditor
                </Button>
              </Grid.Column>
              <Grid.Column width="2">
                <Button
                  name="RemoveAiditor"
                  onClick={this.handleChange('RemoveAuditor')}
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

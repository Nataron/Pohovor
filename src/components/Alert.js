import React from 'react'
import styled from 'styled-components'
import { Divider, Grid, Icon } from 'semantic-ui-react'

const A = styled.div`
  background-color: white;
  padding: 0px 20px;
  min-height: 440px;
  max-height: 440px;
  font-family: 'Roboto', sans-serif;
`
const Header = styled.h3`
  font-family: 'Roboto', sans-serif;
`

class Alert extends React.Component {
  state = { alerts: this.props.alerts }
  handleChange(id) {
    var alert = this.state.alerts.filter(item => item.id !== id)
    this.setState({ alerts: alert })
  }

  render() {
    const { alerts } = this.state
    return (
      <A>
        <Header>Upozornění k řešení</Header>
        <Divider></Divider>

        <Grid>
          {
            //Map to write all the alerts
            //First we check if there are any , if not send empty array
          }
          {alerts
            ? alerts.map(item => (
                <div>
                  <Grid.Row>
                    <Grid>
                      <Grid.Column width="12">{item.text}</Grid.Column>
                      <Grid.Column textAlign="right" width="3">
                        <Icon
                          name="delete"
                          onClick={e => this.handleChange(item.id)}
                        ></Icon>
                      </Grid.Column>
                    </Grid>
                  </Grid.Row>
                  <Divider></Divider>
                </div>
              ))
            : []}
        </Grid>
      </A>
    )
  }
}
export default Alert

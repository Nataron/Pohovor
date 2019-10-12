import React from 'react'
import styled from 'styled-components'
import { Divider, Grid, Icon, Container } from 'semantic-ui-react'
import Info from './Info'

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

class Upozorneni extends React.Component {
  state = { upozorneni: this.props.upozorneni }
  handleChange(id) {
    var upozorneni = this.state.upozorneni.filter(item => item.id !== id)
    this.setState({ upozorneni: upozorneni })
  }

  render() {
    const { upozorneni } = this.state
    return (
      <A>
        <Header>Upozornění k řešení</Header>
        <Divider></Divider>

        <Grid>
          {upozorneni.map(item => (
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
          ))}
        </Grid>
      </A>
    )
  }
}
export default Upozorneni

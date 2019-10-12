import React from 'react'
import styled from 'styled-components'
import { Divider, Grid } from 'semantic-ui-react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
//Styled component to create window
const Window = styled.div`
  background-color: white;
  width: 100%;
  padding: 10px;
  height: 246px;
  font-family: 'Roboto', sans-serif;
`
//Styled component to add header
const Header = styled.h3`
  font-family: 'Roboto', sans-serif;
`
//Component to write window with graph , we are using class to set state and create in memory changes
class WindowWithGraph extends React.Component {
  //set Initial state
  state = { optionsState: this.props.optionsData }

  render() {
    const { optionsState } = this.state
    return (
      <Window>
        <Header>Role uživatelů</Header>
        <Divider></Divider>
        <Grid textAlign="center">
          {/*
            kind a useless to have it in map , probalby more readebly in just <Grid.Column> what we want </Grid.Column>
          */}
          <Grid.Row>
            {optionsState.map(item => (
              <Grid.Column width="4">{item.name}</Grid.Column>
            ))}
          </Grid.Row>
          {
            //Map to show what kind of variables we are in memory
          }
          <Grid.Row style={{ marginTop: '-30px' }}>
            {optionsState.map(item => (
              <Grid.Column width="4">{item.y}</Grid.Column>
            ))}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="16">
              {
                //HighchartsReact.js library documentation for more information
              }
              <HighchartsReact
                highcharts={Highcharts}
                options={{
                  chart: {
                    plotBackgroundColor: null,
                    height: 120,
                    plotShadow: false,
                    type: 'pie',
                    aling: 'right',
                  },
                  title: {
                    text: '',
                  },
                  tooltip: {
                    pointFormat:
                      '{series.name}: <b>{point.percentage:.1f}%</b>',
                  },
                  legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    layout: 'vertical',
                  },
                  plotOptions: {
                    pie: {
                      size: 80,
                      allowPointSelect: true,
                      cursor: 'pointer',
                      dataLabels: {
                        enabled: false,
                      },
                      showInLegend: true,
                    },
                  },

                  series: [
                    {
                      data: optionsState,
                    },
                  ],
                }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Window>
    )
  }
}
export default WindowWithGraph

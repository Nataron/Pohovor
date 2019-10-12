import React from 'react'
import styled from 'styled-components'
import { Divider, Grid } from 'semantic-ui-react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
const A = styled.div`
  background-color: white;
  width: 100%;
  padding: 10px;
  height: 246px;
  font-family: 'Roboto', sans-serif;
`
const Div = styled.div`
  height: 100px;
`
const Header = styled.h3`
  font-family: 'Roboto', sans-serif;
`
const options = {
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
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
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
      data: [['admin', 3], ['auditor', 2], ['manazer', 5], ['uzivatel', 21]],
    },
  ],
}

class WindowWithGraph extends React.Component {
  state = { optionsState: this.props.optionsData }
  handleChange() {}

  render() {
    const { optionsState } = this.state
    return (
      <A>
        <Header>Role uživatelů</Header>
        <Divider></Divider>
        <Grid textAlign="center">
          <Grid.Row>
            {optionsState.map(item => (
              <Grid.Column width="4">{item.name}</Grid.Column>
            ))}
          </Grid.Row>

          <Grid.Row style={{ marginTop: '-30px' }}>
            {optionsState.map(item => (
              <Grid.Column width="4">{item.y}</Grid.Column>
            ))}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="16">
              <Div>
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
              </Div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </A>
    )
  }
}
export default WindowWithGraph

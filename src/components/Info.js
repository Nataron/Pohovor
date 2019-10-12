import React from 'react'

import { Grid } from 'semantic-ui-react'

const Info = ({ text, number, color }) => (
  <Grid>
    <Grid.Column width="8" style={{ fontFamily: 'Roboto' }}>
      {text}
    </Grid.Column>
    <Grid.Column
      width="8"
      style={{
        color: color,
        fontFamily: 'Roboto',
        fontSize: '36px',
        marginTop: '10px',
      }}
    >
      {number}
    </Grid.Column>
  </Grid>
)
export default Info

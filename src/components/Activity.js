import React from 'react'
import _ from 'lodash'

import { Table, Icon } from 'semantic-ui-react'

class Aktivita extends React.Component {
  state = {
    column: null,
    data: this.props.tableData,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'aktivita' ? direction : null}
              onClick={this.handleSort('aktivita')}
            >
              Aktivita
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'uzivatel' ? direction : null}
              onClick={this.handleSort('uzivatel')}
            >
              Uzivatel
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'role' ? direction : null}
              onClick={this.handleSort('role')}
            >
              Role
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'cas' ? direction : null}
              onClick={this.handleSort('cas')}
            >
              <Icon name="time" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ icon, aktivita, uzivatel, role, cas }) => (
            <Table.Row key={uzivatel}>
              <Table.Cell>
                <Icon name={icon} /> {aktivita}{' '}
              </Table.Cell>
              <Table.Cell>{uzivatel}</Table.Cell>
              <Table.Cell>{role}</Table.Cell>
              <Table.Cell>{cas}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="3">Vsechny Zaznamy </Table.HeaderCell>
            <Table.HeaderCell>Posledni Ctvrtleti</Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}
export default Aktivita

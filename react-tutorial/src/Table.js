/* import React, { Component } from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Charlie</td>
                            <td>Janitor</td>
                        </tr>
                        <tr>
                            <td>Mac</td>
                            <td>Bouncer</td>
                        </tr>
                        <tr>
                        <td>Dee</td>
                        <td>Aspiring actress</td>
                        </tr>
                        <tr>
                        <td>Dennis</td>
                        <td>Bartender</td>
                        </tr>
                        </tbody>
                        </table>
        )
    }
}
export default Table; */

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = () => {
  return <tbody /> /*(
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  )*/
}

class Table extends Component {
  render() {
      const { characterData } = this.props
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}
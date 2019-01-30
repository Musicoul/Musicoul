import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = { activeItem: 'home' }
        this.handleItemClick = this.handleItemClick.bind(this);
    }


  handleItemClick(e, { name }){return this.setState({ activeItem: name })}

  render() {
    const { activeItem } = this.state

    return (
      <Menu >
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

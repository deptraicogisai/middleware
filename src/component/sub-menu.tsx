import * as React from 'react'
import {MenuItem} from "../model/MenuItem";
import {MenuItemComponent} from "./menu-item";
import {Link} from "react-router";

interface thisState {
}

interface thisProps {
    menu: MenuItem
}

export class SubMenu extends React.Component<thisProps, {}> {
    render() {
        return (
            <li className="list-group-item">
                <Link to={this.props.menu.link}>{this.props.menu.headerText}</Link>
                {
                    this.props.menu.subMenus ?
                        <MenuItemComponent menuItem={this.props.menu} needRenderHeader={false}/> : null
                }
            </li>
        )
    }
}
import * as React from 'react'
import {MenuItem} from "../model/MenuItem";
import {SubMenu} from "./sub-menu";

interface thisProps {
    menuItem: MenuItem,
    needRenderHeader: boolean
}

export class MenuItemComponent extends React.Component<thisProps, {}> {
    render() {
        return (
            <span className="list-group">
                <ul>
                    <li className="list-group-item list-group-item-success"
                        style={{'display': this.props.needRenderHeader ? 'block' : 'none'}}
                        data-toggle="collapse" data-target={`#item-${this.props.menuItem.name}`}
                    > {this.props.menuItem.headerText}</li>
                    <span className="collapse" id={`item-${this.props.menuItem.name}`}>
                    {
                        this.props.menuItem.subMenus ? this.props.menuItem.subMenus.map((item, index) => {
                            return <SubMenu menu={item} key={index}/>
                        }) : null
                    }
                    </span>
                </ul>
            </span>
        );
    }
}
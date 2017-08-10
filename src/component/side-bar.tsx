import * as React from 'react'
import {MenuItem} from "../model/MenuItem";
import {MenuItemComponent} from "./menu-item";

interface thisState {
}

interface thisProps {
    menus: MenuItem[]
}

export class Sidebar extends React.Component<thisProps, thisState> {
    render() {
        return (
            <div>
                {
                    this.props.menus ?
                        this.props.menus.map((item, index) => {
                            return <MenuItemComponent menuItem={item} key={index} needRenderHeader={true}/>
                        }) : null
                }
            </div>
        )
    }
}
import * as React from 'react'
import {StickyHeaderItem} from "./sticky-header-item";

interface thisProps {
    data: any
}

export class ListStickyHeader extends React.Component<thisProps, {}> {
    render() {
        return (
            <div>
                {
                    this.props.data ? this.props.data.map((item, index) => {
                        return <StickyHeaderItem data={item.items} headerName={item.headerName} key={index}></StickyHeaderItem>
                    }) : null
                }
            </div>
        )
    }
}
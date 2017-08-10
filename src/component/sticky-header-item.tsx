import * as React from 'react'

interface thisProps {
    data: any,
    headerName: string
}

interface thisState {
    isCollapse: boolean
}

export class StickyHeaderItem extends React.Component<thisProps, thisState> {

    componentWillMount() {
        this.setState({
            isCollapse: false
        })
    }

    render() {
        return (
            <div>
                <div className="list-group"
                >
                    <ul>
                        <li className="list-group-item list-group-item-success">{this.props.headerName}
                            <i data-toggle="collapse" data-target={`#item-${this.props.headerName.replace(' ', '')}`}
                               onClick={() => this.setState({isCollapse: !this.state.isCollapse})}
                               className={!this.state.isCollapse ? 'glyphicon glyphicon-plus-sign pull-right' : 'glyphicon glyphicon-minus-sign pull-right'}
                               style={{'font-weight': 'bold', 'font-size': '20'}}></i>
                        </li>
                    </ul>
                </div>
                <div className="list-group collapse" id={`item-${this.props.headerName.replace(' ', '')  }`}>
                    <ul>
                        {
                            this.props.data ? this.props.data.map((item, index) => {
                                return <li className="list-group-item" key={index}>{item.title}</li>
                            }) : null
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
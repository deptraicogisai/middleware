import * as React from 'react'
import {Scrollbars} from 'react-custom-scrollbars';
import {Notification} from 'react-notification';
import blockStore from "./store/blockStore";
import {MenuItem} from "./model/MenuItem";
import {Sidebar} from "./component/side-bar";


interface HState {
    isActive: boolean,
    block: boolean,
    menus: MenuItem[]
}

export class Home extends React.Component<any, HState> {

    componentWillMount() {
        this.setState({
            isActive: false,
            block: false,
            menus: [
                {
                    headerText: 'Guide',
                    name: 'Guide',
                    subMenus: [
                        {
                            headerText: 'What is Native Base ?'
                        },
                        {
                            headerText: 'Why Native Base ?'
                        },
                        {
                            headerText: "What's new in v0.57 ?"
                        }
                    ]
                },
                {
                    headerText: 'Getting Started',
                    name: 'getting-started',
                    subMenus: [
                        {
                            headerText: 'Post',
                            link: '/'
                        },
                        {
                            headerText: 'Photos',
                            link: '/photos'
                        }
                    ]
                },
                {
                    headerText: 'Components',
                    name: 'component',
                    subMenus: [
                        {
                            headerText: 'Antomy',
                        },
                        {
                            headerText: 'Badge'
                        },
                        {
                            headerText: 'Button'
                        }
                    ]
                }
            ]
        })

        blockStore.subscribe(() => {
            let state = blockStore.getState();

            this.setState({
                block: state.block
            })
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <Scrollbars style={{height: 400}}>
                            <Sidebar menus={this.state.menus}/>
                        </Scrollbars>
                    </div>
                    <div className="col-md-8">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
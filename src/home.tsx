import * as React from 'react'
import {Scrollbars} from 'react-custom-scrollbars';
import {Notification} from 'react-notification';
import blockStore from "./store/blockStore";
import {MenuItem} from "./model/MenuItem";
import {Sidebar} from "./component/side-bar";
import {Header} from "./component/header";
import ReactImageMagnify from 'react-image-magnify';

interface HState {
    isActive: boolean,
    block: boolean,
    menus: MenuItem[],
    images: string[]
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
                            link: '/middleware'
                        },
                        {
                            headerText: 'Photos',
                            link: '/middleware/photos'
                        },
                        {
                            headerText: 'Book Search',
                            link: '/middleware/book-search'
                        }
                        ,
                        {
                            headerText: 'Camera Da Nang',
                            link: '/danang-cam'
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
                },
            ],
            images: [
                'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
                'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
                'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
                'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
            ]
        })

        blockStore.subscribe(() => {
            let state = blockStore.getState();

        })
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>

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
                <div className="col-md-8">
                    <div id="slider" className="flexslider">
                        <ul className="slides">
                            {
                                this.state.images.map((item, index) => {
                                    return <li key={index}>
                                        <img
                                            src={item}/>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
import * as React from 'react'
import {Post} from "../model/post";
import {PostRowItem} from "./post-row-item";
// include styles
import {Scrollbars} from 'react-custom-scrollbars';
import {connect} from 'react-redux';
import {FetchData} from "../action";
import {ResetState} from "../action/postAction";
import '../post.css';
import demoState from '../model/DemoState'
import { observer } from 'mobx-react';


interface thisState {
    images: any,
    items: []
}

interface thisProp {
    posts: Post[]
}

@observer
class PostComponent extends React.Component<thisProp, thisState> {

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    componentWillMount() {
        this.setState({
            images: [
                {
                    original: 'http://lorempixel.com/1000/600/nature/1/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                },
                {
                    original: 'http://lorempixel.com/1000/600/nature/2/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
                },
                {
                    original: 'http://lorempixel.com/1000/600/nature/3/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
                }
            ],
            items: [
                {
                    headerName: "List A",
                    items: [{
                        title: "items1"
                    }, {
                        title: "items2"
                    }]
                },
                {
                    headerName: "List B",
                    items: [{
                        title: "items1"
                    }, {
                        title: "items2"
                    }]
                },
                {
                    headerName: "List C",
                    items: [{
                        title: "Item C.1"
                    }, {
                        title: "Item C.2"
                    }]
                }
            ]
        })
    }


    componentDidMount() {
        this.props.FetchData();
    }

    componentWillUnmount() {
        this.props.ResetState();
    }

    render() {
        return (
            <div className="row">
                <div>
                    <form onSubmit={demoState.onSubmit}>
                        <input
                            type="text"
                            value={demoState.username.value}
                            onChange={(e)=>demoState.username.onChange(e.target.value)}
                        />
                        <input
                            type="text"
                            value={demoState.password.value}
                            onChange={(e)=>demoState.password.onChange(e.target.value)}
                        />
                        <p>{demoState.username.error}</p>
                        <p>{demoState.password.error}</p>
                        <p>{demoState.form.error}</p>
                    </form>
                    <Scrollbars style={{height: 800}}>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>User Id</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                </tr>
                                </thead>
                                <tbody>

                                {
                                    this.props.posts ?
                                        this.props.posts.map((item, index) => {
                                            return <PostRowItem post={item}
                                                                key={index}/>
                                        }) : <span>No Records</span>
                                }

                                </tbody>
                            </table>
                        </div>
                        <button><i className="fa fa-bars" />sd</button>
                    </Scrollbars>
                </div>
            </div>

        )
    }
}

const bindActionsToDispatch = dispatch =>
    (
        {
            fetchData: () => {
                dispatch(FetchData())
            }
        }
    );

const mapStateToProps = (state) => ({
    posts: state.posts.posts
})
//export default connect(mapStateToProps, bindActionsToDispatch)(PostComponent);
export default connect(({posts}) => ({posts: posts.posts}), {FetchData, ResetState})(PostComponent);
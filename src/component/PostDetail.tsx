import * as React from 'react'
import store from "../store/postStore";
import {ViewDetail} from "../action/postAction";
import {Post} from "../model/post";

interface DetailState {
    detail?: Post
}

export class PostDetail extends React.Component<any, DetailState> {


    componentWillMount() {

        this.componentWillReceiveProps(this.props);
    }

    componentDidMount() {
        store.subscribe(() => {
            let state = store.getState();

            this.setState({
                detail: state.detail
            })
        })
    }

    componentWillReceiveProps(props) {
        if (props.params && props.params.id) {
            let id = +(props.params.id);

            store.dispatch(ViewDetail(id));
        }
    }

    render() {
        return (
            <div>
                {
                    this.state && this.state.detail ? `Post Id : ${this.state.detail.id} -  ${this.state.detail.body}` : null
                }
            </div>
        )
    }
}
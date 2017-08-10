import * as React from 'react'
import {Post} from "../model/post";
import {Link} from "react-router";

interface TRowProp {
    post: Post
}

export class PostRowItem extends React.Component<TRowProp, {}> {
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/detail/${this.props.post.id}`}>{this.props.post.id}</Link>
                </td>
                <td>
                    {this.props.post.userId}
                </td>
                <td>
                    {this.props.post.title}
                </td>
                <td>
                    {this.props.post.body}
                </td>
            </tr>
        )
    }
}
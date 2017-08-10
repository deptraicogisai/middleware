import * as React from 'react'
import {Photo} from "../model/photo";
import ReactImageFallback from "react-image-fallback";
interface TRowProp {
    photo: Photo
}

export class PhotoRowItem extends React.Component<TRowProp, {}> {
    render() {
        return (
            <tr>
                <td>
                    {this.props.photo.albumId}
                </td>
                <td>
                    {this.props.photo.id}
                </td>
                <td>
                    {this.props.photo.title}
                </td>
                <td>
                        {/*<img className="img img-circle img-responsive" src={this.props.photo.thumbnailUrl}*/}
                             {/*style={{'width': 50, 'height': 50}}/>*/}

                    <ReactImageFallback
                        src={this.props.photo.thumbnailUrl}
                        fallbackImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iaGED3E1ZQVl-NnZ1NFYBOici8M6RxxVpjhw6T_FXRwx6He2EQ"
                        initialImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iaGED3E1ZQVl-NnZ1NFYBOici8M6RxxVpjhw6T_FXRwx6He2EQ"
                        alt="cool image should be here"
                        className="img img-circle img-responsive" />

                </td>
            </tr>
        )
    }
}
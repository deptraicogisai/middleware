import * as React from 'react'
import {Item} from "../model/book";

interface TRowProp {
    book: Item
}

export class BookRowItemList extends React.Component<TRowProp, {}> {

    transformDescription(description: string = ''): string {

        description.length > 50 ?
            description = description.substr(0, 50) + '...'
            :
            description = description.substr(0, 50)

        return description;

    }

    render() {
        return (
            <tr>
                <td>
                    {
                        this.props.book.volumeInfo.imageLinks ?
                            <img src={this.props.book.volumeInfo.imageLinks.thumbnail} className="img img-rounded img-responsive"/>
                            : <img src='http://findicons.com/files/icons/2212/carpelinx/128/folder_home2.png'
                                   className="img img-rounded img-responsive"/>
                    }

                </td>
                <td>
                    {this.props.book.volumeInfo.title}
                </td>
                <td>
                    <span
                        title={this.props.book.volumeInfo.description}> {this.transformDescription(this.props.book.volumeInfo.description)}</span>
                </td>
                <td>
                    {this.props.book.volumeInfo.authors}
                </td>
            </tr>
        )
    }
}
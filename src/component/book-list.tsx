import * as React from 'react'
import {Book} from "../model/book";
import {BookRowItemList} from "./book-row-item-list";

interface thisProps {
    books: Book[]
}

export class BookList extends React.Component<thisProps, {}> {
    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Thumbnail</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.books && this.props.books.length ?
                            this.props.books.map((item, index) => {
                                return <BookRowItemList book={item} key={index}/>
                            }) : <span>No Records</span>
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
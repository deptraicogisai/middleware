import * as React from 'react'
import {Book} from "../model/book";
import {connect} from 'react-redux'
import {SearchBook, ResetState} from "../action/bookSearchAction";
import {BookList} from "./book-list";
import {BookGrid} from "./book_grid";

interface thisState {
    search?: string,
    displayType: number,
    maxResult: number
    pageSizeList: []
}

interface thisProps {
    books: Book[]
}

class BookSearchComponent extends React.Component<thisProps, thisState> {

    componentWillMount() {
        this.setState({
            displayType: 1,
            maxResult: 10,
            pageSizeList: [10, 20, 30, 40]
        })
    }

    componentWillUnmount() {
        this.props.ResetState();


    }

    search() {
        this.props.SearchBook(this.state.search, this.state.maxResult);
    }

    render() {
        return (
            <div className="row">
                <div>
                    <form className="form-inline" onSubmit={e => {
                        e.preventDefault()
                    }}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                   onChange={(e) => {
                                       this.setState({search: e.target.value})
                                   }}
                                   onKeyPress={(e) => {
                                       e.key == 'Enter' && this.search()
                                   }}
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => this.search()}>Search</button>
                        <button className="btn btn-primary book-control"
                                type="button"
                                onClick={() => this.setState({displayType: 1})}>
                            <img
                                src='http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/16/Actions-view-list-details-icon.png'
                                style={{'padding-right': '5px'}}
                            />List
                        </button>
                        <button className="btn btn-primary book-control"
                                type="button"
                                onClick={() => this.setState({displayType: 2})}
                        ><img
                            src='http://icons.iconarchive.com/icons/icons8/windows-8/16/Data-Grid-icon.png'
                            style={{'padding-right': '5px'}}
                        />Grid
                        </button>
                        <select className="form-control book-control"
                                onChange={(e) => {
                                    this.setState({maxResult: e.target.value}, () => {
                                        this.search();
                                    });
                                }}
                                value={this.state.maxResult}
                        >
                            {
                                this.state.pageSizeList.map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })
                            }
                        </select>
                    </form>
                </div>
                {
                    this.state.displayType == 1 ? <BookList books={this.props.books}/>
                        : <BookGrid books={this.props.books}/>

                }
            </div>
        )
    }
}

export default connect(({books}) => ({books: books.books}), {SearchBook, ResetState})(BookSearchComponent);

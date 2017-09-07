import * as React from 'react'
import {Book} from "../model/book";

interface thisProps {
    books: Book[]
}

export class BookGrid extends React.Component<thisProps, {}> {
    render() {
        return (
            <div className="row" style={{'padding': '10px'}}>
                {
                    this.props.books ?
                        this.props.books.map((item, index) => {
                            return item.volumeInfo.imageLinks ?
                                <div key={index} className="col-md-4 about-left">
                                    <figure className="effect-bubba">
                                        <img className="img-responsive" src={item.volumeInfo.imageLinks.thumbnail}
                                             alt=""/>
                                        <figcaption>
                                            <h2>{item.volumeInfo.title}</h2>
                                            <p>{item.volumeInfo.description ? item.volumeInfo.description.substr(0, 100) : null}
                                            </p>
                                        </figcaption>
                                    </figure>
                                </div>
                                : <div key={index} className="col-md-3 thumnail-height"><img
                                    src='http://findicons.com/files/icons/2212/carpelinx/128/folder_home2.png'
                                    className="img img-rounded img-responsive"/></div>
                        }) : <span>No Records</span>
                }
            </div>
        )
    }
}
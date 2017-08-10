import * as React from 'react'
import {Photo} from "../model/photo";
import store from "../store/photoStore";
import {PhotoRowItem}  from "./photo-row-item";
import {FetchData} from "../action/photoAction";
import blockStore from "../store/blockStore";
import {Blocking, UnBlocking} from "../action/blockAction";


interface thisState {
    photos: Photo[],
    images: any,
    isLoading: boolean
}

export class PhotoComponent extends React.Component<{}, thisState> {

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    componentWillMount() {

        this.setState({
            photos: [],
            isLoading: false
        })

        store.subscribe(
            () => {
                let state = store.getState();
                this.setState({
                    photos: state.data,
                    isLoading: false
                })

                blockStore.dispatch(UnBlocking());
            }
        )
    }

    componentDidMount() {
        store.dispatch(FetchData());

        blockStore.dispatch(Blocking());

        this.setState({
            isLoading: true
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-7">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Album Id</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Thumbnail</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.photos && this.state.photos.length > 0 ?
                                    this.state.photos.map((item, index) => {
                                        return <PhotoRowItem photo={item} key={index}/>
                                    }) : this.state.isLoading ?
                                    <div className="loader"
                                         style={{'display': this.state.isLoading ? 'block' : 'none'}}></div>
                                    : <span>No Records</span>
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


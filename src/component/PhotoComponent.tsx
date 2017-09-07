import * as React from 'react'
import {Photo} from "../model/photo";
import {PhotoRowItem} from "./photo-row-item";
import {FetchData, ResetState} from "../action/photoAction";
import {Blocking} from "../action/blockAction";
import {connect} from 'react-redux';

interface thisState {
    images: any,
}

interface thisProps {
    photos: Photo[],
    isLoading: boolean
}

class PhotoComponent extends React.Component<thisProps, thisState> {

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

    componentDidMount() {
        this.props.FetchData();

        this.props.Blocking();
    }

    componentWillUnmount() {
        this.props.ResetState();
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
                                this.props.photos && this.props.photos.length > 0 ?
                                    this.props.photos.map((item, index) => {
                                        return <PhotoRowItem photo={item} key={index}/>
                                    }) : this.props.isLoading ?
                                    <div className="loader"
                                         style={{'display': this.props.isLoading ? 'block' : 'none'}}></div>
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

const bindActionsToDispatch = dispatch =>
    (
        {
            fetchData: () => {
                dispatch(FetchData())
            },

            block: () => {
                dispatch(Blocking());
            }
        }
    );

const mapStateToProps = (state) => ({
    photos: state.photos.photos,
    isLoading: state.block.isLoading
})

//export default connect(mapStateToProps, bindActionsToDispatch)(PhotoComponent);
export default connect(({photos, block}) => ({photos: photos.photos, isLoading: block.isLoading}), {
    FetchData,
    ResetState,
    Blocking
})(PhotoComponent);

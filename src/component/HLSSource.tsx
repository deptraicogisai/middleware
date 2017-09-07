import * as React from 'react'
import * as Hls from 'hls.js'

interface thisProp {
    type: string,
    src: string,
    video?: any
}

interface thisState {
    hls: any
}

export class HLSSource extends React.Component<thisProp, thisState> {

    componentWillMount() {
        this.setState({
            hls: new Hls()
        })
    }

    componentDidMount() {

        const {src, video} = this.props;
        // load hls video source base on hls.js
        if (Hls.isSupported()) {
            this.state.hls.loadSource(src);
            this.state.hls.attachMedia(video);
            this.state.hls.on(Hls.Events.MEDIA_ATTACHING, () => {
                video.play();
            });
        }
    }

    render() {
        return (
            <source
                src={this.props.src}
                type={this.props.type || 'application/x-mpegURL'}
            />
        )
    }
}
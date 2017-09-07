import * as React from 'react'
import videojs from 'video.js';
import * as ReactDOM from 'react-dom';
import {Player} from 'video-react';
import {HLSSource} from './HLSSource';

interface thisState {
    player: any
}

export class DanangCam extends React.Component<{}, thisState> {

    componentDidMount() {
        const options = {
            sources: [{
                src: "http://2co2.vp9.tv/chn/DNG14/v.m3u8",
                type: "application/x-mpegURL"
            }]
        }

        const videoNode = ReactDOM.findDOMNode(this).querySelector('video');

        this.setState({
                player: videojs(videoNode, options, function onPlayerReady() {
                console.log('onPlayerReady', this)
            })
        })
    }

    componentWillUnmount() {
        // if (this.state.player) {
        //     this.state.player.dispose()
        // }
    }


    handlePlay(player) {
        console.log('onPlay', player);
    }

    render() {
        return (
            <div>
                <div>
                    <div data-vjs-player>
                    <video className="video-js" controls width="600" height="264"></video>
                    </div>
                </div>
            </div>
        )
    }
}
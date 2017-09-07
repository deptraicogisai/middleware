import * as React from 'react'
import LoadingBar from 'react-redux-loading-bar'

export class Header extends React.Component<{}, {}> {
    render(){
        return(
            <header>
                <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }}/>
            </header>
        )
    }
}
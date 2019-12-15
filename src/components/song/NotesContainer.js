// NotesContainer.js

import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
// import { useSpring, useTransition, animated } from "react-spring"
import { Keyframes, animated } from 'react-spring/renderprops'

import './NotesContainer.css'

const Sidebar = Keyframes.Spring({
    // single items,
    full: { x: -48, w: 105 },
    half: { x: 1, w: 60 },
    close: { x: 90, w: 60 },
    closeHalf: { x: 15, w: 60 }
})

export default class AnnotationContainer extends Component {
    state = { annoOpen: true, noteOpen: true }

    render() {
        let state = 'close'
        if (this.props.isOpen) {
            if (this.props.annoOpen) state = 'half'
            else state = 'full'
        } else {
            if (this.props.annoOpen) state = 'closeHalf'
        }
        return (
            <div>
                <Sidebar native state={state}>
                    {props => (
                        <animated.div
                            className="notes_sidebar"
                            style={{
                                transform: props.x.interpolate(
                                    x => `translate3d(${x}%,0,0)`
                                ),
                                width: props.w.interpolate(w => `${w}rem`)
                            }}
                        ></animated.div>
                    )}
                </Sidebar>
            </div>
        )
    }
}

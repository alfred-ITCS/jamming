import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export default class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                 {this.props.tracks.map(Track => {
                    return <Track Track={Track} key={Track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} 
                        isRemoval={this.props.isRemoval}
                    />
                  })
                 }
            </div>
        )
        }
    }

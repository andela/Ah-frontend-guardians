import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import '../../css/sidepanel.css';
 
class SidePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpenLeft: false
        };

        this.handleClick = this.handleClick.bind(this)
    }
 
    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    handleClick(e) {
        this.setState({ isPaneOpenLeft: false });
        this.props.handleTags(e.target.name);
    }
 
    render() {
        return <div id="slidingPaneTags" ref={ref => this.el = ref}>
            <div>
                <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                   <i className="fas fa-tags"> Tags</i>
                </button>
            </div>
            <SlidingPane
                closeIcon={<div><i className="fas fa-tags"></i></div>}
                isOpen={ this.state.isPaneOpenLeft }
                title='Select a Tag'
                from='left'
                width='20%'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <div><button className="btn-primary sidePanelTags" onClick={this.handleClick} name="all">All</button></div>
                <div><button className="btn-primary sidePanelTags" onClick={this.handleClick} name="code">Code</button></div>
                <div><button className="btn-primary sidePanelTags" onClick={this.handleClick} name="react">React</button></div>
                <div><button className="btn-primary sidePanelTags" onClick={this.handleClick} name="lifestyle">Lifestyle</button></div>
                <div><button className="btn-primary sidePanelTags" onClick={this.handleClick} name="entertainment">Entertainment</button></div>
            </SlidingPane>
        </div>;
    }
}

export default SidePanel;

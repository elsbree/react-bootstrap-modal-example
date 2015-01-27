/**
 * Mixin that helps elements which trigger a modal.
 */

var React = require('react/addons');
var ReactBootstrap = require('react-bootstrap');

module.exports = {
    mixins: [
        ReactBootstrap.OverlayMixin
    ],
    getInitialState: function() {
        return {
            modalOpen: false
        };
    },
    triggerModal: function(e) {
        this.setState({
            modalOpen: true
        });

        if(e && e.preventDefault) {
            e.preventDefault();
        }
    },
    onModalClose: function() {
        this.setState({
            modalOpen: false
        });
    },
    renderOverlay: function() {
        if(!this.state.modalOpen) {
            return <span/>;
        }

        return (
            <span>
                {this.modal}
            </span>
        )
    }
};

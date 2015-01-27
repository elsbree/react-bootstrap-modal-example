var React = require('react/addons');
var Modal = require('react-bootstrap').Modal;

var HelloModal = React.createClass({
    render: function() {
        return (
            <Modal onRequestHide={this.props.onRequestHide} className='hello-modal'>
                <div id='hello-modal' className='my-modal small'>
                    Hello, world!
                </div>
            </Modal>
        );
    }
});

var ModalButton = React.createClass({
    mixins: [
        require('../lib/mixins/ModalTrigger.jsx')
    ],
    render: function() {
        this.modal = (
            <HelloModal {...this.props} onRequestHide={this.onModalClose} />
        );

        return (
            <a onClick={this.triggerModal}>
                Click Me To Say Hello!
            </a>
        );
    }
});

window.onload = function() {
    React.render(<ModalButton />, document.getElementById('app'));
};

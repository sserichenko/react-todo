import React from 'react';
import './Modal.css';
export default class Modal extends React.Component {
  state = {
    isModalOpen: false,
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <React.Fragment>
        {isModalOpen ? (
          <div className="modal">
            <div className="modal-body">
              <h2>Modal title</h2>
              <p>I am cute modal...</p>
              <button onClick={() => this.setState({isModalOpen: false})} className="close-modal">Close modal</button>
            </div>
          </div>
        ) : (
          ''
        )}
        <button onClick={() => this.setState({isModalOpen: true})}>Open modal</button>
      </React.Fragment>
    );
  }
}

import React from 'react';
import { Card, Modal, ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';

export const MeteoriteList = ({ year, dateRange, show, onHide }) => {
  return (
    <div>
      <Modal size="md" centered show={show} className="modal">
        <h2 className="text-center">Meteor List</h2>
        <ModalHeader className="modal-header">
          <button onClick={onHide}>Close</button>
        </ModalHeader>
        <ModalBody className="modal-body">
          <ul className="list">
            {year[dateRange].map((meteor) => {
              return (
                <Card
                  style={{ width: '20rem' }}
                  className="text-center"
                  bg="info"
                  text="white"
                >
                  <li key={meteor.id}>
                    <h3>Name:{meteor.name}</h3>
                    <p>Mass: {meteor.mass}</p>
                    <p>Year of Fall:{meteor.year.slice(0, 4)}</p>
                    <p>Latitude:{meteor.reclat}</p>
                    <p>Longitude:{meteor.reclong}</p>
                  </li>
                </Card>
              );
            })}
          </ul>
        </ModalBody>
      </Modal>
    </div>
  );
};

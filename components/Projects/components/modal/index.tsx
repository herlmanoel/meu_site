import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
`;

interface ModalProps {
    closeModal: () => void;
}

export const Modal = ({ closeModal }: ModalProps) => {
    return (
        <ModalContainer>
            <ModalContent>
                <button onClick={closeModal}>Close</button>
            </ModalContent>
        </ModalContainer>
    );
};


import React, { useState } from 'react';
import ModalPlugin from "./lib/component/ModalPlugin";
import { createRoot } from 'react-dom/client';

const App = () => {
    const [toggleModal, setToggleModal] = useState(false)

    return (
        <div>
            <h1>Hello React</h1>
            <button onClick={() => setToggleModal(true)}>Open Modal</button>
            <ModalPlugin toggleModal={toggleModal} setToggleModal={setToggleModal}
                colorBG={'#eee'} width={'500px'} height={'300px'} >
                <h1>Bienvenue !</h1>
                <p>Votre inscription est validée !</p>
            </ModalPlugin>
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
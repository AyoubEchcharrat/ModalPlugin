# ModalPlugin

ModalPlugin is a very tiny library that allows you to create modals quickly.

## Deployment

- To use this library run

using npm : 

```bash
$ npm install --save ModalPlugin
```

or using yarn :

```bash
$ yarn add ModalPlugin
```

- You are now able to add ```< ModalPlugin > {children} </ ModalPlugin >``` in your project
## Usage

```ModalPlugin``` use to be working with React local State, add the following line to initialize ```toggleModal``` and ```setToggleModal``` :

```javascript 
const [toggleModal, setToggleModal] = useState(false)
```

Then add it as props on ModalPlugin Component :

```javascript 
<ModalPlugin toggleModal={ toggleModal } setToggleModal={ setToggleModal } >
/*
* Content
*/
</ModalPlugin>
```

Informations can be passed as props to customize width, height, and background-color :

```
 colorBG={ '#eee' } width={ '500px' } height={ '300px' } 
```

Finally add content you want to display inside the modal, working using ```{children}``` props.

## Example


```javascript
import React, { useState } from 'react';
import ModalPlugin from "./lib/ModalPlugin";
import { createRoot } from 'react-dom/client';

const App = () => {
    const [toggleModal, setToggleModal] = useState(false)

    return (
        <div>
            <button onClick={() => setToggleModal(true)}>Open Modal</button>
            <ModalPlugin toggleModal={toggleModal} setToggleModal={setToggleModal}
                colorBG={'#eee'} width={'500px'} height={'300px'} >
                <h1>Welcome !</h1>
                <p>You are now connected.</p>
            </ModalPlugin>
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

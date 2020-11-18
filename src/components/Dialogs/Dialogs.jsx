import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import dia from "./Dialogs.module.css";
import Message from './Message/Message';

const Dialogs = (props) => {


    let newNamesArr = props.state.dialogsArr.map((el) => {
        return <DialogItem name={el.name} number={el.id} />
    })


    let newMessArr = props.state.messageArr.map((ell) => {
        return <Message text={ell.message} />
    })

    let newElement = React.createRef();

    let addText = () => {

        alert(newElement.current.value);

    }

    return (
        <div className={dia.dDiv}>

            <div className={dia.dialogsItems}>
                {newNamesArr}
            </div>
            <div className={dia.messages}>
                {newMessArr}

                <div>
                    <textarea ref={newElement}>
                    </textarea>
                    <button onClick={addText} >Add text</button>
                </div>
            </div>

        </div>
    );

}
export default Dialogs;
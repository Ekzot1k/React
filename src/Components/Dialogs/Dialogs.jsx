import dialogsModule from './Dialogs.module.css';
import Items from './Items/Items';
import Messeges from './Messeges/Messeges';

let messagesData = [
    { Text: 'Сообщение 1' },
    { Text: 'Сообщение 2' },
    { Text: 'Сообщение 3' },
    { Text: 'Сообщение 4' },
    { Text: 'Сообщение 5' },
];

let itemsData = [
    { ID: 1, Name: 'Denis' },
    { ID: 2, Name: 'Diana' },
    { ID: 3, Name: 'Lena' },
    { ID: 4, Name: 'Dima' },
    { ID: 5, Name: 'Oleg' },
    { ID: 6, Name: 'Lada' }
];

const Dialogs = (props) => {
    return (
        <div className={dialogsModule.dialogs}>
            <Items ItemsData = {itemsData}/>
            <Messeges MessagesData = {messagesData}/>
        </div>)
};

export default Dialogs;
import dialogsModule from './Dialogs.module.css';
import Items from './Items/Items';
import Messeges from './Messeges/Messeges';

const Dialogs = (props) => {
    return (
        <div className={dialogsModule.dialogs}>
            <Items DataSourceItems = {props.DataSourceItems}/>
            <Messeges DataSourceMessages = {props.DataSourceMessages}/>
        </div>)
};

export default Dialogs;
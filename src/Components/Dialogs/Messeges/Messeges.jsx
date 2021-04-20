import messegesModule from './Messeges.module.css';
import Message from './Message/Message';

const Messeges = (props) => { 
    return (
        <div className={messegesModule.messeges} >
            {props.Data.map(mes => <Message Text={mes.Text} />)}
        </div>)
};

export default Messeges;
import messegesModule from './Messeges.module.css';
import Message from './Message/Message';

const Messeges = (props) => {
    return (
        <div className={messegesModule.messeges} >
            <Message Text='Сообщение 1' />
            <Message Text='Сообщение 2' />
            <Message Text='Сообщение 3' />
            <Message Text='Сообщение 4' />
            <Message Text='Сообщение 5' />
        </div>)
}

export default Messeges;
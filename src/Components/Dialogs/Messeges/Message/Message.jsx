import messageModule from './Message.module.css';

const Message = (props) => {
    return (
        <div className={messageModule.message} >
            {props.Text}
        </div>)
}

export default Message;
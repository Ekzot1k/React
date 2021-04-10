import postModule from './Post.module.css';

const Post = (props) => {
    return (
        <div className={postModule.item}>
            {props.Text} создан {props.Date} сентября 2021г.
        </div>)
}

export default Post;
import Post from './Post/Post';
import myPostsModule from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
        <div className={myPostsModule.myPosts}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>New post</button>
            </div>
            <div className={myPostsModule.posts}>
                {props.Data.map(p => <Post Text={p.Text} Date={p.Date} />)}
            </div>
        </div>)
};

export default MyPosts;
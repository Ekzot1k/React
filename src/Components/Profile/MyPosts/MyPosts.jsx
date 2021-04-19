import Post from './Post/Post';
import myPostsModule from './MyPosts.module.css';

let posts = [
    { Text: 'Post #1', Date: 14 },
    { Text: 'Post #2', Date: 15 },
    { Text: 'Post #3', Date: 16 },
    { Text: 'Post #4', Date: 17 },
    { Text: 'Post #5', Date: 18 },
    { Text: 'Post #6', Date: 19 },
];

const MyPosts = () => {
    return (
        <div className={myPostsModule.myPosts}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>New post</button>
            </div>
            <div className={myPostsModule.posts}>
                {posts.map(p => <Post Text={p.Text} Date={p.Date} />)}
            </div>
        </div>)
}

export default MyPosts;
import Post from './Post/Post';
import myPostsModule from './MyPosts.module.css';

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
                <Post Text='Post #1' Date='14' />
                <Post Text='Post #2' Date='15' />
                <Post Text='Post #3' Date='21' />
                <Post Text='Post #4' Date='22' />
                <Post Text='Post #5' Date='23' />
                <Post Text='Post #6' Date='24' />
                <Post Text='Post #7' Date='25' />
                <Post Text='Post #8' Date='26' />
                <Post Text='Post #9' Date='30' />
            </div>
        </div>)
}

export default MyPosts;
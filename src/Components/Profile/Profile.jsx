import profilModule from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';

const Profile = (props) => {
    return (
        <div className={profilModule.profile}>
            <Info />
            <MyPosts Data={props.Data.Posts} />
        </div>)
};

export default Profile;
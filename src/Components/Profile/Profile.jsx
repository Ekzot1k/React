import profilModule from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';

const Profile = () => {
    return (
        <div className={profilModule.profile}>
            <Info />
            <MyPosts />
        </div>)
}

export default Profile;
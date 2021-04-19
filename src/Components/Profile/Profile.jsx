import profilModule from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';

const Profile = (props) => {
    return (
        <div className={profilModule.profile}>
            <Info />
            <MyPosts DataSourcePosts={props.DataSourcePosts} />
        </div>)
};

export default Profile;
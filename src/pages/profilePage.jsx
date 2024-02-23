import Profile from "../components/profile/profile.jsx";
import MasterLayout from "../components/layouts/authLayout.jsx";

const ProfilePage = () => {
    return (
        <div>
            <MasterLayout>
                <Profile/>
            </MasterLayout>
        </div>
    );
};

export default ProfilePage;
import Profile from "../components/profile/profile.jsx";
import MasterLayout from "../components/layouts/authLayout.jsx";
import Footer from "../components/footer/footer.jsx";

const ProfilePage = () => {
    return (
        <div>
            <MasterLayout>
                <Profile/>
                <Footer/>
            </MasterLayout>
        </div>
    );
};

export default ProfilePage;
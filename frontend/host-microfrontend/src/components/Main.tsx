import React, {lazy} from "react";

const ProfileSection = lazy(() => import("profile/ProfileSection"));
const CardSection = lazy(() => import("card/CardSection"));

const Main: React.FC = () => {
    return (
        <main className="content">
            <ProfileSection/>
            <CardSection/>
        </main>
    );
};

export default Main;

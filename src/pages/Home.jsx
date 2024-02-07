import BelowBar from "../components/BelowBar";
import Details from "../components/Details";
import Records from "../components/Records";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Home(){
    return(
        <>
        <ResponsiveAppBar name="Post Agreement Health Check" color="#307c88"/>
        <BelowBar />
        <Details />
        <Records />
        </>
    );
}

export default Home;
import Layout from "../../components/layout/Layout";
import FormSection from "../../components/formSection/FormSection";
import {Chart} from "../../components/chart/Chart";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the desired page when the button is clicked
        navigate("/questions"); 
    };

    return (
        <Layout>
            <FormSection/>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' ,marginTop:"3.5rem"}}>
                {/* Button with background color */}
                <Button variant="contained" color="secondary" onClick={handleClick}>
                    Frequently Asked Questions!
                </Button>
            </div>
            <Chart/>
        </Layout>
    );
}

export default HomePage;

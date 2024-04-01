import Layout from "../../components/layout/Layout";
import FormSection from "../../components/formSection/FormSection";
import { Chart } from "../../components/chart/Chart";
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
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:gap-10 lg:justify-center ">
        <FormSection />
        <div className="lg:mx-[1rem]">
          {" "}
          {/* Adjust the negative margin value */}
          <div className="flex justify-center p-4 mt-10 ">
            {/* Button with background color */}
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Frequently Asked Questions!
            </Button>
          </div>
          <Chart />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

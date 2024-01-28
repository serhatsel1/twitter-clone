import PropTypes from "prop-types";

const Home = () => {
  return <h1 className="text-3xl font-bold">Home Page</h1>;
};

export default Home;

Home.propTypes = {
  children: PropTypes.node,
};

import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <main className="home">
        <Sidebar />
          <div className="home__content">
            <Header />
          </div>
      </main>
    </Layout>
  );
};

export default Home;

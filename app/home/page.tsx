import Footer from "../components/Footer/footer";
import Header from "../components/header/header";
import Content from "../components/homeContent/content";
import Options from "../components/homeContentOption/options";

const Page = () => {
  return (
    <div>
      <Header />
      <Options />
      <Content/>
      <Footer/>
    </div>
  );
};
export default Page;

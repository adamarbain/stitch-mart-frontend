import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import HomeContent from '../HomeContent/HomeContent';
import Footer from '../Footer/Footer';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import SaleItem from '../SaleItem/SaleItem';
import SignUp from '../SignUp/SignUp';
import Profile from '../Profile/Profile'
import HeaderAfterLogin from '../Header/HeaderAfterLogin';

function HomeAfterLogin() {
  return (
    <div>
      <HeaderAfterLogin />
      <HomeContent />
      <FeaturesCard />
      <SaleItem />
      <Footer />
    </div>
  );
}

export default HomeAfterLogin;

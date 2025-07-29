import { useLocation } from 'react-router-dom';
import NavBar from '@/components/navbar';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const location = useLocation();
  const isDetailPage = location.pathname.includes('/detail');

  return (
    <div className="main-layout">
      <NavBar />
      <main className="main-content">{children}</main>
      {!isDetailPage && <Footer />}
    </div>
  );
};

export default MainLayout;

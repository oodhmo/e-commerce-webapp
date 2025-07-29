import NavBar from '@/components/navbar';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="main-layout">
      <NavBar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

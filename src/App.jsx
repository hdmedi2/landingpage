import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ForPharmacistsSection from './components/ForPharmacistsSection/ForPharmacistsSection';
import ProblemSection from './components/ProblemSection/ProblemSection';
import SolutionSection from './components/SolutionSection/SolutionSection';
import ProcessComparisonSection from './components/ProcessComparisonSection/ProcessComparisonSection';
import StatisticsSection from './components/StatisticsSection/StatisticsSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import RecommendationSection from './components/RecommendationSection/RecommendationSection';
import ContactFormSection from './components/ContactFormSection/ContactFormSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <ForPharmacistsSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessComparisonSection />
      <StatisticsSection />
      <BenefitsSection />
      <RecommendationSection />
      <ContactFormSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Reelcut from "./pages/portfolio/Reelcut";
import Newbase from "./pages/portfolio/Newbase";
import BlackhatAirdrop from "./pages/portfolio/BlackhatAirdrop";
import NamnrPro from "./pages/portfolio/NamnrPro";
import EllieTalksMoney from "./pages/portfolio/EllieTalksMoney";
import LazyMoneyCircle from "./pages/portfolio/LazyMoneyCircle";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/reelcut" element={<Reelcut />} />
          <Route path="/portfolio/newbase" element={<Newbase />} />
          <Route path="/portfolio/blackhatairdrop" element={<BlackhatAirdrop />} />
          <Route path="/portfolio/namnrpro" element={<NamnrPro />} />
          <Route path="/portfolio/ellietalksmoney" element={<EllieTalksMoney />} />
          <Route path="/portfolio/lazymoneycircle" element={<LazyMoneyCircle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

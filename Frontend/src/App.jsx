import "@interchain-ui/react/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardDeal, Footer, Hero, Navbar } from "./components";
import Table from "./components/Table";
import styles from "./style";
import Swap from "./components/swap";
import { wallets } from "@cosmos-kit/keplr-extension";
import { ChainProvider } from "@cosmos-kit/react";
import {mantra} from '../lib/chainConfig'
import { assets, chains } from "chain-registry";
import Trading from "./components/Trade";
import HorizontalScroller from "./components/HorizontalScroller";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        </div>
        </div>
      */}
    {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}> */}
    {/* <div className={`${styles.boxWidth}`}> */}
    {/* <Stats /> */}

    {/* <Billing /> */}
    {/* <Table/> */}

    {/* <Testimonials /> */}
    {/* <Clients /> */}
    {/* <CTA /> */}
    {/* <Footer /> */}
    {/* </div>
    </div> */}
    <BrowserRouter>
      <ChainProvider
        chains={[...chains,mantra]} // supported chains
        assetLists={assets} // supported asset lists
        wallets={wallets} // supported wallets
      >
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/swap" element={<CardDeal />} />
          <Route path="/trade" element={<Trading />} />
          <Route path="/Liquidity" element={<HorizontalScroller />} />
          <Route path="/Token" element={<Table />} />
        </Routes>
      </ChainProvider>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;

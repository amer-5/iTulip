import Table from "@/sections/table";
import Rows from "@/sections/rows";
import Style from "@/styles/pages/page.module.css";
import SmallTable from "@/sections/smallTable";
import ClusterPage from "@/sections/cluster";
import FiveTable from "@/sections/5table";
import Map from "@/sections/map";
import Footer from "@/sections/footer";
import PageTxt from "@/sections/tableTxt";

import HomeSection from "@/sections/home";
import ServicesSection from "@/sections/services";
import Scroller from "@/components/scroller";
import { OrbiPartner, VoltPartner } from "@/sections/partners";
import Roles from "@/sections/roles";
import CardSection from "@/sections/cardSection";

export default function Home() {
  return (
    <div className={Style.parent}>
      <HomeSection />
      <Map />
      <Table />
      <ServicesSection />
      <Rows />
      <Scroller />
      <ClusterPage />
      <PageTxt />
      <FiveTable />
      <OrbiPartner />
      <SmallTable />
      <VoltPartner />
      <Roles />
      <CardSection />
      <Footer />
    </div>
  );
}

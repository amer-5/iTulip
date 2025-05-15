
import Table from "@/sections/table";
import Rows from "@/sections/rows";
import Style from "@/styles/pages/page.module.css";
import SmallTable from "@/sections/smallTable";
import ClusterPage from "@/sections/cluster";
import FiveTable from "@/sections/5table"
import Map from "@/sections/map";
import Footer from"@/sections/footer";
import PageTxt from "@/sections/tableTxt";
export default function Home() {
  return (
    <div className={Style.parent}>
      <Map />
      <Table />
      <Rows />
      <ClusterPage />
      <PageTxt />
      <FiveTable />
      <SmallTable />
      <Footer />
    </div>
  );
}

import Card from "@/components/card";
import Table from "@/sections/table";
import Icon from "@/public/icons/falling-star.svg";
import Rows from "@/sections/rows";
import Style from "@/styles/pages/page.module.css";
import SmallTable from "@/sections/smallTable";



export default function Home() {
  return (
    <div className={Style.parent}>

      <Table/>
      <Card.Contact
        heading="CONTINUITEIT"
        icon={Icon}
        buttonText="Contact us now"
        features={[
          "Merciere teams beschikbaar voor langdurige projecten",
          "Ontwikkelaars met jarenlange ervaring eerst/meerwerk",
          "Werkt volgens Agile methode",
          "Flexibel en schaalbaar",
        ]}
      />
      <Rows/>
      <SmallTable/>
    </div>
  );
}

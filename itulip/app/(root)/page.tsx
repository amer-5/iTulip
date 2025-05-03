import Card from "@/components/card";

import Icon from "@/public/icons/falling-star.svg";

import Style from "@/styles/pages/page.module.css";

export default function Home() {
  return (
    <div className={Style.parent}>
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
    </div>
  );
}

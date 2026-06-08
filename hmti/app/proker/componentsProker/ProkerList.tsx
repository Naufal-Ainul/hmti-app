import ProkerCard from "./ProkerCard";
import CardTilt from "../../../components/proker/CardTilt";

type ProkerListProps = {
  data: any[];
  visible: number;
};

export default function ProkerList(props: ProkerListProps) {
  const { data, visible } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      {data.slice(0, visible).map((item, index) => (
        <CardTilt key={index}>
          <ProkerCard proker={item} />
        </CardTilt>
      ))}
    </div>
  );
}
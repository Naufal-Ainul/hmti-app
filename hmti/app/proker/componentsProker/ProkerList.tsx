import ProkerCard from "./ProkerCard";
import CardTilt from "../../../components/proker/CardTilt";

type ProkerListProps = {
  data: any[];
  visible: number;
};

export default function ProkerList(props: ProkerListProps) {
  const { data, visible } = props;

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
      {data.slice(0, visible).map((item, index) => (
        <CardTilt key={index}>
          <ProkerCard proker={item} />
        </CardTilt>
      ))}
    </div>
  );
}
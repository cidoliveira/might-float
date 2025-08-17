import Image from "next/image";

export default function DesktopIcon(props) {
  return (
    <div className="cursor-pointer font-[DotGothic16] hover:bg-[#041a7b] inline-flex flex-col items-center p-5">
      <Image src={props.icon} alt={props.alt} width={50} height={50} />
      <div className="inline">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

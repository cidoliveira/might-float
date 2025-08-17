import Header from "./components/Header";
import DesktopIcon from "./components/DesktopIcon";

export default function Home() {
  return (
    <div className="bg-[#047b7b] w-[100dvw] h-[100dvh] font-[DotGothic16]">
      <Header />
      <div className="inline-flex flex-col gap-10 m-10">
        <DesktopIcon
          icon="/icons/gallery.svg"
          alt="Ícone da Galeria"
          title="Galeria"
        />
        <DesktopIcon
          icon="/icons/music.svg"
          alt="Ícone de Música"
          title="Música"
        />
      </div>
    </div>
  );
}

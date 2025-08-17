import DesktopIcon from "./components/DesktopIcon";

export default function Home() {
  return (
    <div className="bg-[#047b7b] w-[100dvw] h-[100dvh]">
      <div className="inline-flex flex-col gap-10 m-10">
        <DesktopIcon
          icon="/icons/gallery.svg"
          alt="Gallery Icon"
          title="Gallery"
        />
        <DesktopIcon icon="/icons/music.svg" alt="Music Icon" title="Music" />
      </div>
    </div>
  );
}

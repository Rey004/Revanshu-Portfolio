import Navbar from "@/components/Navbar";
import BackgroundTexture from "@/components/BackgroundTexture";
import ResumeViewer from "@/components/ResumeViewer";

export const metadata = {
  title: "Resume | Revanshu",
  description: "View and download Revanshu's Resume & CV — Full Stack Developer & Designer.",
};

export default function ResumePage() {
  return (
    <main className="relative min-h-screen bg-[#060606]">
      <BackgroundTexture />
      <Navbar />

      <section className="relative z-10 pt-28 md:pt-32 pb-20 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <ResumeViewer />
      </section>
    </main>
  );
}

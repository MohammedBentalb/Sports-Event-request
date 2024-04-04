import Section from '@/components/firstSection/Section';
import NavBar from '@/components/Navbar/NavBar';
import SectionTwo from '@/components/secondSection/SectionTwo';

export default function Home() {
  return (
    <>
      <NavBar />
      <Section />
      <div className=" flex items-center justify-center pt-12">
        <button className="bg-[#2C9CF0] px-8 py-3 text-[.8rem] rounded text-white hover:opacity-80 capitalize">
          See more
        </button>
      </div>
      <SectionTwo />
    </>
  );
}

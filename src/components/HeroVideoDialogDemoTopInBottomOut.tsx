import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import ContactPage from "./ContactPage";

export function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <div className="relative max-w-7xl md:mx-auto xs:mx-4 ">
         <h2 className=" text-3xl font-bold md:text-5xl  cinzel-decorative-regular  text-white mb-4 text-center pb-8">
             How We Scale Brands To 7-Figure A Month
          </h2>
      <HeroVideoDialog
        className="dark:hidden block "
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block "
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    <div className="flex justify-center w-full mt-4">
        <ContactPage
          className="relative border border-slate-300/30 bg-slate-400/30 rounded-lg p-4 h-fit w-fit"
          buttonText="Learn More"
        />
      </div>
      </div>
  );
}

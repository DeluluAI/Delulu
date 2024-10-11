import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroDemo() {
  return (
    <div className="flex justify-center md:w-full">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/landing/dashboard.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/landing/dashboard.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

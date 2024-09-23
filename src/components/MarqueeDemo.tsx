import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
      name: "Rahul Sharma",
      username: "@SharmaInteriors",
      body: "Working with Elesium Online transformed our business. Their expertise in social media marketing brought us clients we couldn't have reached otherwise. Highly recommend!",
      avatar: "https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img: "https://via.placeholder.com/300x200",  // Random image URL
    },
    {
      name: "Fatima Al-Harbi",
      username: "@AlHarbiDesigns",
      body: "You have truly elevated our online presence. The engagement we received has been phenomenal, and the entire team is a pleasure to work with.",
      avatar: "https://images.pexels.com/photos/5125192/pexels-photo-5125192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "John O Connor",
      username: "@OCInteriorDesign",
      body: "Thanks to You, our business has seen a significant boost in client inquiries. Their strategic approach to social media is second to none.",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Aisha Ahmed",
      username: "@AishaArchitecture",
      body: "You provided us with an outstanding marketing plan that helped us reach a larger audience. The results were beyond our expectations.",
      avatar: "https://images.pexels.com/photos/6700513/pexels-photo-6700513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Jacob George",
      username: "@GeorgeDesigns",
      body: "Your approach is both creative and effective. Our business saw incredible engagement and a noticeable increase in brand recognition.",
      avatar: "https://images.pexels.com/photos/8937588/pexels-photo-8937588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img: "https://via.placeholder.com/300x200",
    },
    {
      name: "Priya Mehta",
      username: "@MehtaInteriors",
      body: "You helped us achieve exactly what we needed: more visibility and better client engagement. I highly recommend their services to any business.",
      avatar: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img: "https://via.placeholder.com/300x200",
    },
  ];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  avatar,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  avatar:string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4 justify-between border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15] flex flex-col",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full pointer-events-none h-12 w-12 object-cover"  src={avatar} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
        
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
      
      {/* <img className="rounded-xl pt-4 self-end h-60 pointer-events-none object-cover"  width={"100%"} alt="" src={img} /> */}
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="mx-auto relative flex max-w-7xl w-full flex-col items-center justify-center overflow-hidden rounded-lg [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] pb-4">
         <h2 className="pb-8 text-3xl max-w-7xl font-bold md:text-5xl  cinzel-decorative-regular mx-auto text-white xs:px-4 md:px-0 text-center">
             Testimonials
          </h2>
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
    </div>
  );
}

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";
import ContactPage from "../ContactPage";

const data = [
  { name: "Sept", ROAS: 0, adSpend: 0 },
  { name: "Oct", ROAS: 50000, adSpend: 10000 },
  { name: "Nov", ROAS: 100000, adSpend: 30000 },
  { name: "Dec", ROAS: 200000, adSpend: 50000 },
  { name: "Jan", ROAS: 350000, adSpend: 80000 },
  { name: "Feb", ROAS: 500000, adSpend: 120000 },
  { name: "Mar", ROAS: 700000, adSpend: 160000 },
  { name: "Apr", ROAS: 900000, adSpend: 200000 },
  { name: "May", ROAS: 1100000, adSpend: 250000 },
  { name: "Jun", ROAS: 1300000, adSpend: 300000 },
  { name: "Jul", ROAS: 1500000, adSpend: 350000 },
  { name: "Aug", ROAS: 1800000, adSpend: 400000 },
];

export default class Graph1 extends PureComponent {
  render() {
    return (
      <div className="sm:w-full md:w-3/4 bg-slate-950/30 p-4 h-full rounded-2xl pl-0  mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 15,
              right: 30,
              left: 0, // Set left margin to 0 or adjust as needed
              bottom: 15,
            }}
          >
            <XAxis
              dataKey="name" // Use 'name' to display the month names
              stroke="#fff"
              axisLine={{ stroke: "#fff" }}
              tick={{ fill: "#fff" }}
            />
            <YAxis
              stroke="#fff"
              axisLine={{ stroke: "#fff" }}
              tick={{ fill: "#fff" }}
              tickFormatter={(value) => `${value / 100000} `} // Format Y-axis values with 'k'
              tickCount={5}
            />
            <Tooltip
              formatter={(value) => {
                if (typeof value === "number") {
                  return `₹${value / 100000} lakh`;
                }
                return value; // Return the value as is if it's not a number
              }}
              contentStyle={{
                borderRadius: "8px",
                padding: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "#fff",
              }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: 20, // Adjust this value to control the spacing from the X-axis
              }}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="linear" dataKey="adSpend" stroke="#8884d8" />
            <Line type="monotone" dataKey="ROAS" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-8  h-fit w-full rounded-2xl">
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold">
            The Challenge
          </h2>
          <ul className="text-xl list-disc pl-10 text-slate-400">
            <li>Developing effective omnichannel marketing campaigns</li>
            <li>Overcoming major tracking issues</li>
            <li>Increasing customer lifetime value</li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            The Result
          </h2>
          <ul className="text-xl list-disc pl-10 text-slate-400">
            <li>800% revenue increase</li>
            <li>Increased profitability</li>
            <li>Systemised marketing funnel for long term growth</li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <div className="h-fit bg-red-300 w-fit rounded-xl object-cover overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="."
            />
          </div>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            What You Will Learn From This Case Study
          </h2>
          <ul className="text-xl custom-list pl-10 text-slate-400">
            <li>The importance of building omnichannel marketing campaigns</li>
            <li>
              Why double attribution could be killing your profit margins and
              how to fix tracking issues.
            </li>
            <li>
              How to capitalise on your customer base more effectively than ever
              before.
            </li>
            <li>
              {" "}
              How to introduce massive offer scarcity without annoying your
              customers
            </li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Introduction
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            We started working with this brand at the beginning of May 2021 just
            as the lockdown was easing across the US. This business primarily
            sells sports clothing and equipment to the US and UK markets.
            <br />
            <br />
            In our prescriptive analysis phase for this client, we noticed a
            severe lack of congruity across marketing channels, ad-hock
            discounts, little campaign planning and poor creative attention
            across every platform.
            <br />
            <br />A key focus for this brand was profitability at the highest
            possible level... We knew that with our campaign management team,
            e-mail marketing specialists and growth hacking techniques there was
            serious progress to be made.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Planning
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            The business simply did not have the time, experience or resources
            to implement a harmonious marketing strategy. So our first action
            point was to plan out 3 months of proven and effective campaigns.
            <br />
            <br />
            It made perfect sense for our team to gain control of every aspect
            of the brand&#39;s marketing… Facebook ads, Google ads, TikTok ads,
            e-mail marketing, ad graphics creation, ad video scripting and
            landing page builds.
            <br />
            <br />
            Making the marketing congruent across each platform caused an
            instant improvement in results. And we saw a revenue increase of
            over 100% in a matter of 2 weeks. Omnichannel marketing has a
            compound effect and each platform works more effectively when
            combined and budget is allocated correctly.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Tracking
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Allocating budget in the correct place is essential for predictable
            growth and so we use tools like Triple Whale to monitor the true
            success of our campaigns. There were large discrepancies between the
            Facebook, Google ad dashboard and our tracking software so after
            making a few decisions based on the truest point of attribution our
            revenue and overall results improved.
            <br />
            <br />
            Double attribution is a major problem that E-com businesses face as
            the majority of good marketing agencies work on a commission basis.
            Our tracking guarantees that no double attribution takes place which
            means that not only is our ad data more accurate (Allowing us to
            make better marketing decisions) but were not charging over the odds
            for double attribution across multiple platforms.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Leverage
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            After taking a broader view of the marketing funnel we noticed a
            huge pool of past customers that were not being leveraged. A famous
            law of marketing is that 80% of your sales come from 20% of your
            customers.
            <br />
            <br />
            So we built out a VIP e-mail system.
            <br />
            <br />A VIP system essentially segments out the top 20% of your
            customers and treats them with discounts, offers, new product drops
            and much more. This means that brand loyalty skyrockets which
            increases lifetime value and ultimately results in way more profit.
            We initiated this system just a few weeks into our partnership with
            this brand and the e-mail revenue jumped from 16% to 33% in a matter
            of days.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Scarcity
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Scarcity and urgency are tools that can be implemented into most
            brands without upsetting your potential customers… It just needs to
            be used at the right time and in the right place. Audience
            segmentation across all platforms allows us to increase the
            relevancy of an offer to the potential customer. For example… We can
            create a list of potential customers that were extremely close to
            pulling the trigger on a sale and fire hyper relevant offers to them
            across each of our marketing channels.
            <br />
            <br />
            This level of attention and proactivity is required for brands
            hoping to achieve respectable numbers. We call these marketing
            campaigns and events &#39;revenue squeezes&#39; and they were achieving
            close to $20k per day for each campaign.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Creatives
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Above everything, a focus on new creatives and angles was the main
            driver behind this brand&#39;s success. Developing a successful creative
            format was essential for us to understand where we could double down
            our marketing dollars. A successful creative format can be iterated
            on, over and over again.
            <br />
            <br />
            The way people are consuming content has changed vividly from just a
            few years ago and now UGC content combined with dynamic ads are
            leading the charge with our results. This led us to develop our
            script writing team to ensure ads were extremely compelling and up
            to date with trends. We also built out a video editing department in
            order to re-use and develop more creatives from single video shoots,
            this reduced the cost of video production and massively increased
            our ad ROAS.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Conclusion
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Having a clear roadmap and expected destination helps us smash
            deliverables when they need to be executed.
            <br />
            <br />
            This brand struggled to escape its state of entropy and needed a
            clear plan of action combined with new-age marketing techniques to
            scale to the next level.
            <br />
            <br />
            Brands need to be conscious of upcoming marketing opportunities as
            the landscape for DTC changes so frequently. A small shift in
            creative strategy and platform led us to increase this brand&#39;s
            revenue and overall profitability of the business.
          </p>
          <ContactPage buttonText="Apply Now" className="mt-4 h-fit w-fit p-4 bg-slate-700/40 border border-slate-300/30 rounded-lg" />
          <div className="h-60" id="bottom"></div>
        </div>
      </div>
    );
  }
}

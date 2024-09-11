
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


const data = [
  { name: "Apr", ROAS: 0, adSpend: 0 },
  { name: "May", ROAS: 400000, adSpend: 110000 },
  { name: "Jun", ROAS: 1266667, adSpend: 330000 },
  { name: "Jul", ROAS: 2500000, adSpend: 350000 },
  { name: "Aug", ROAS: 3000000, adSpend: 560000 },
  { name: "Sept", ROAS: 3200000, adSpend: 600000 },
  { name: "Oct", ROAS: 5000000, adSpend: 700000 },
];

export default class Graph1 extends PureComponent {
  render() {
    return (
      <div className="sm:w-full md:w-3/4 bg-slate-950/30 p-4 h-96 rounded-2xl pl-0  mx-auto">
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
              dataKey="name" // Use &#39;name&#39; to display the month names
              stroke="#fff"
              axisLine={{ stroke: "#fff" }}
              tick={{ fill: "#fff" }}
            />
            <YAxis
              stroke="#fff"
              axisLine={{ stroke: "#fff" }}
              tick={{ fill: "#fff" }}
              tickFormatter={(value) => `${value / 100000} `} // Format Y-axis values with &#39;k&#39;
              tickCount={5}
            />
            <Tooltip
              formatter={(value) => {
                if (typeof value === "number") {
                  return `₹${value / 100000} lakh`;
                }
                return value; // Return the value as is if it&#39;s not a number
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
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold text-white">
            The Challenge
          </h2>
          <ul className="text-xl list-disc pl-10 text-slate-400">
            <li>Organisation and campaign management</li>
            <li>Maintaining brand power</li>
            <li>Combatting ad saturation</li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            The Result
          </h2>
          <ul className="text-xl list-disc pl-10 text-slate-400">
            <li>Systemised workloads</li>
            <li>Brand mission congruent with marketing</li>
            <li>Fresh and highly effective creatives </li>
            <li>₹ 8lakh p/m reliable revenue figures</li>
          </ul>

          <div className="h-fit bg-red-300 w-fit rounded-xl object-cover overflow-hidden mt-4 pointer-events-none">
            <img
              src="https://cdn.prod.website-files.com/62ce930274c3a44b8bcd0138/62ce930274c3a4aeaecd0149_casestudy-3-thumbnail.png"
              alt="."
            />
          </div>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            What You Will Learn From This Case Study
          </h2>
          <ul className="text-xl custom-list pl-10 text-slate-400">
            <li>Why systemising workloads is essential for growth</li>
            <li>How to make sure you don&#39;t lose brand strength</li>
            <li>How to plan and launch new and effective creatives</li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Introduction
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            This business is structured as a giveaway company meaning that
            buying a product from the website would automatically enter you into
            winning a large prize. You will see in the Shopify screenshot above
            that these giveaway campaigns are run on and off. This means that
            revenue was not consistent but rather worked periodically.
            <br />
            <br />
            For example, one giveaway would run for 6 weeks and there would be a
            4-week break before running the next one. By nature, the business
            had a large number of complexities so we took a very systemised
            approach to minimise any issues caused by this. An extremely high
            volume of new marketing was required and this is how we tackled it…
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Campaign Management
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Every week, this business would change its offering. For example… At
            the start of the giveaway campaign, the offer would be &#39;buy one
            get one free. The week after would be &#39;15% off sitewide&#39;
            This rapid change in offerings would mean new creatives and copy
            angles every 7 days.
            <br />
            <br />
            A high turnover of content and other marketing assets led us to
            create a management machine which kept every team member accountable
            for meeting deliverables. We aimed for 7 new video creatives every
            week with 7 pictures to accommodate. Each creative was scripted
            using effective frameworks and sent to the client to produce 2 weeks
            in advance. Additionally, 3 email campaigns were sent out each week.
            <br />
            <br />
            We decided to create a management dashboard. Each member of the team
            had access to this dashboard to stay informed of essential
            deadlines. This dashboard had an additional positive effect in that
            it helped us with tracking results. We would replicate highly
            effective campaigns in the following giveaways. And storing this
            data meant we could quickly figure out which offer yielded the best
            results on an ongoing basis.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Combatting Brand Dilution
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Naturally, with such a high level of creative assets, businesses run
            the risk of diluting their brand. Each ad iteration has the
            potential to lose brand messaging and therefore effectiveness. A
            brand guidance document was an essential tool for developing
            marketing assets. This ensured that every aspect of our marketing
            (FB ads, Email copy, Keywords, Video style) Was absolutely on point
            with the desired effect.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            8 Figure Ad Frameworks
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Scripting and designing highly effective video ads come with plenty
            of experience and marketing psychology. In the majority of our ads,
            we use 2 main frameworks.
            <br />
            <br />
            A.I.D.A Attention, Interest, Desire, Action
            <br />
            <br />
            P.A.S Problem, Agitate, Solution
            <br />
            <br />
            These frameworks are a good starting block for video ad scripting.
            They have a proven methodology so we use them as frequently as
            possible.
            <br />
            <br />
            After nailing the ad scripts we alter and test hundreds of different
            hooks. The &#39;Hook&#39; is the first 2 seconds of a video which is
            directly responsible for grabbing people&#39;s attention on social
            platforms.
            <br />
            <br />
            An ad is often a story of your product or customer. One of the best
            ways to start a story is through the ‘struggle’. This allows you to
            represent how a product can fix the user&#39;s need. Or better yet,
            change their lives.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Conclusion
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Tightly managed operations will have an extremely positive effect on
            your brand. Organisation in all aspects of your marketing will allow
            you to understand the root cause of your success and double down on
            what works.
            <br />
            <br />
            Brand messaging is the overarching factor that determines success…
            Creating a brand sheet means you can stick to creating ad assets
            that actually work.
            <br />
            <br />
            Utilising proven ad frameworks will allow you to scale without
            gambling. Tiny iterations on a proven angle will give ad accounts
            new life and allow even further success.
          </p>
          
          
          <div className="h-60" id="bottom"></div>
        </div>
      </div>
    );
  }
}

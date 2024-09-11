
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
            <li>Converting Leads into Clients</li>
            <li>Differentiating from competitors</li>
            <li>Cross-Platform Integration</li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            The Result
          </h2>
          <ul className="text-xl list-disc pl-10 text-slate-400">
            <li>ALMOST 60 PERCENT LEAD TO CUSTOMER RATE BY ADVERTISING</li>
            <li>HAD BEST STRATEGIES FOR STANDING OUT FROM THERE COMPETITION</li>
            <li>HAD THE BEST FUNNEL IN HE SPAN OF 4 MONTHS </li>
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
            <li>
              WHY HAVING SYSTEMS AND PROCESSES ARE ESSENTIAL FOR THE GROWTH OF
              DESIGN BUSINESSESh
            </li>
            <li>HOW TO BUILD A STRONG ONLINE FUNNEL </li>
            <li>HOW TO PLAN THE CONTENT STRATEGY AND POSTS</li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Introduction
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            This business operates as a premium design consultancy, offering
            exclusive interior design makeovers or top-tier architectural
            consultations through a unique service package. To tackle key
            challenges such as converting leads into clients, differentiating
            from competitors, and achieving seamless cross-platform integration,
            we have designed a strategic approach.
            <br />
            <br />
            For example, each campaign, which runs for 6 weeks followed by a
            4-week break, is crafted to generate excitement and anticipation. We
            address the conversion challenge by creating compelling, targeted
            content that engages potential clients and highlights our unique
            value propositions. To stand out from competitors, we emphasize our
            distinctive offerings and create high-quality, innovative marketing
            materials that showcase our expertise. Additionally, we ensure
            cross-platform integration by aligning our campaigns across various
            channels, maintaining a consistent brand message, and providing a
            seamless client experience. This systematic approach allows us to
            efficiently manage operations, address client needs, and drive
            successful outcomes.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            CONVERSION OF LEADS INTO PAYING CUSTOMERS
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            At ELESIUM.ONLINE, we specialize in converting leads into paying
            customers through the strategic use of Facebook Ads. Our approach
            begins with targeted audience segmentation to ensure your ads reach
            the most relevant prospects. We craft visually compelling ad
            creatives that highlight your unique design services and capture
            attention in a competitive market. By implementing customized
            funnels, we guide potential clients from initial interest through to
            the final decision, nurturing them at every stage. Our retargeting
            strategies re-engage users who have interacted with your ads but
            haven&#39;t yet converted, boosting conversion rates. We continually
            analyze ad performance and make data-driven adjustments to optimize
            results and maximize ROI. To ensure a seamless transition from lead
            generation to client acquisition, we integrate our efforts with your
            sales process. Finally, our focus on building long-term
            relationships turns one-time customers into loyal clients, fostering
            ongoing engagement and satisfaction.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            DIFFERENTIATING FROM COMPETITORS
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Standing out from the competition in today&#39;s crowded marketplace
            requires a strategic approach to digital marketing. At
            ELESIUM.ONLINE , we specialize in differentiating your brand by
            clearly defining your unique value propositions and crafting a
            distinct brand identity that resonates with your target audience.
            Our targeted content marketing strategies deliver valuable insights
            and solutions, establishing your brand as an industry leader. By
            leveraging innovative social media tactics, engaging content, and
            interactive campaigns, we enhance your online presence and foster a
            loyal following. Additionally, our SEO strategies ensure high
            visibility in search engine results, while our paid advertising
            efforts drive targeted traffic to your website. Continuous
            monitoring and adaptation of strategies keep you ahead of
            competitors, and showcasing customer testimonials and case studies
            further builds your credibility. Partner with us to create a
            powerful digital marketing strategy that sets you apart and drives
            long-term success.
          </p>
          <hr className="my-4 border border-slate-300/30" />

          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Conclusion
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Efficient lead-to-customer conversion and strategic differentiation
            are key to enhancing your brand&#39;s success. By streamlining your
            conversion process and marketing operations, you gain clear insights
            into what drives customer acquisition, allowing you to focus on
            strategies that yield results.
            <br />
            <br />
            A well-defined approach to converting leads is crucial for
            maintaining effectiveness. Implementing a structured funnel ensures
            that all touchpoints are optimized for turning prospects into paying
            customers, enhancing overall conversion rates.
            <br />
            <br />
            Leveraging proven differentiation strategies helps you stand out
            confidently. Small, strategic tweaks to successful tactics can
            sharpen your competitive edge, driving continued growth and
            maintaining a strong market presence without unnecessary risks.
          </p>

          <div className="h-60" id="bottom"></div>
        </div>
      </div>
    );
  }
}

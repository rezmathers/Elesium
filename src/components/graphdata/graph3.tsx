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
            <li>
              Scale and maintain large ad budgets whilst battling ad fatigue
            </li>
            <li>Develop brand positioning for increased customer response</li>
            <li>Market and scale internationally</li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            The Result
          </h2>
          <ul className="text-xl list-disc pl-10 text-slate-400">
            <li>527% Revenue increase from the previous year</li>
            <li>Increasing returning customer rate to 21%</li>
            <li>Achieving a 24-hour sales record of $364k</li>
          </ul>

          <div className="h-fit bg-red-300 w-fit rounded-xl object-cover overflow-hidden mt-4 pointer-events-none">
            <img
              src="https://cdn.prod.website-files.com/62ce930274c3a44b8bcd0138/62ce930274c3a4e06ccd0148_casestudy-2-thumbnail.jpg"
              alt="."
            />
          </div>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            What You Will Learn From This Case Study
          </h2>
          <ul className="text-xl custom-list pl-10 text-slate-400">
            <li>Why branding is essential for next-level growth</li>
            <li>How to broaden your market internationally</li>
            <li>How to structure FB ad accounts for rapid scaling</li>
            <li> How to leverage new opportunities when they appear</li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Introduction
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            When we first started working with this brand we initially performed
            prescriptive analysis (PA). PA allows us to gain a full
            understanding of what marketing techniques had been previously used
            to scale the business to a respectable monthly revenue of just over
            $1m.
            <br />
            <br />
            In addition, our research showed us exactly where our focus needed
            to be in order to increase ad spend with a profitable return.
            Ultimately this is what led to our decision-making process that
            increased revenue by 5X.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Branding
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            A big focus for this brand right before we began to scale spending
            was to nail the branding. A store will make you a million but a
            brand will make you a billion. At Affluent we are strong believers
            that your lifetime value metrics will depend greatly on the message
            that your brand portrays.
            <br />
            <br />
            This brand sells clothing and accessories to the blue-collar niche
            so we wanted to make sure that our messaging was authentic to the
            day to day work of the blue-collar marketplace. We did multiple
            branding days with the business to nail down the mission statement
            of the company. Once the mission statement was in place we could
            make sure that our marketing across all platforms was aligned with
            that statement. That's when results started to explode.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            International Scaling
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            During our analysis phase, we discovered that there was an untapped
            marketplace in Mexico. The product and brand were a perfect fit and
            so we decided to launch ads and email campaigns by translating the
            language to Spanish. With our ads, we decided to keep the targeting
            completely broad and the Facebook algorithm rewarded us for doing
            so.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            8 Figure Ad Account
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            We have spent the past few years trialling new Facebook ad account
            structures to allow us to scale as aggressively as possible. Our
            most impactful strategy called the ‘Bid Mitigation Strategy’ was
            used in this business which ultimately allowed us to scale spend to
            new heights.
            <br />
            <br />
            The bid mitigation strategy is structured in the following way…
            <br />
            <br />
            1X ABO Campaign per country (For testing)
            <br />
            <br />
            1X CBO Campaign (Scaling)
            <br />
            <br />
            1X Minimum ROAS campaign (Maintaining)
            <br />
            <br />
            1X Cost Cap Campaign (Stabilising)
            <br />
            <br />
            In essence, this ad account structure means we can play campaigns
            off each other and make sure they achieve a minimum profitable ROI.
            Each ad campaign uses a different bid strategy and so is made
            responsible for achieving the desired result as we continuously
            increase the budget.
            <br />
            <br />
            Of course, the ad account structure is not just the only aspect of a
            successful marketing funnel… An effective and reliable flow of new
            content is key to scaling without encountering ad fatigue. We are
            currently writing 7 new ad scripts and pieces of copy every week to
            launch relentless testing to maintain the massive growth.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Omnichannel Expansion
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            With all of our clients, we are constantly looking at new ways to
            increase profitability and scale at TOF. TikTok is currently a
            goldmine of opportunity for brands to break into and with the proper
            guidance can be extremely lucrative.
            <br />
            <br />
            With our current success on Facebook for this brand, we decided to
            tweak the video ads into a TikTok style format. With just a few
            minor changes, we turned on the tap of another highly profitable TOF
            source.
            <br />
            <br />
            Omnichannel marketing is often the end game for large companies like
            this. As Facebook and TikTok progressed… We then took control of all
            marketing channels for the business. Including, FB, Insta, TikTok,
            Google ads, Email marketing, CRO, and Ad content editing.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Conclusion
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            There is a multitude of techniques that need the implementation to
            scale brands to 8 figures.
            <br />
            <br />
            Each marketing platform has certain nuances that require true
            specialist capabilities to achieve good results. Advancing each one
            of these specialisms must remain the sole focus of marketing in
            order to scale and maintain competitiveness.
          </p>
          <div className="h-60" id="bottom"></div>
        </div>
      </div>
    );
  }
}

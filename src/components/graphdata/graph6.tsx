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
            <li>Talent Acquisition and Retention</li>
            <li>Scalability of Personalized Service</li>
            <li>Showcasing Portfolio</li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            The Result
          </h2>
          <ul className="text-xl list-disc pl-10 text-slate-400">
            <li>Hired easy talents for the best prices </li>
            <li>The Services were priced better and made a heavenly fortune</li>
            <li>We made them a personal portfolio completely for free</li>
          </ul>

          <div className="h-fit bg-red-300 w-fit rounded-xl object-cover overflow-hidden mt-4 pointer-events-none">
            <img
              src="https://cdn.prod.website-files.com/62ce930274c3a44b8bcd0138/62ce930274c3a4aeaecd0149_casestudy-3-thumbnail.png"
              alt="."
            />
          </div>
          <hr className="my-4 border border-slate-300/30" />

          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Introduction
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Our premium design consultancy offers exclusive interior makeovers
            and top-tier architectural consultations through a unique service
            package. We address three key challenges: converting leads into
            clients, differentiating from competitors, and cross-platform
            integration.
            <br />
            <br />
            Each 6-week campaign, followed by a 4-week break, is crafted to
            build anticipation and engagement. To convert leads, we create
            compelling content that highlights our unique value propositions. To
            differentiate, we emphasize our distinct offerings with high-quality
            marketing that reflects our expertise. For cross-platform
            integration, we align campaigns across all channels, maintaining a
            consistent brand message and delivering a seamless client
            experience. This strategic approach drives successful outcomes and
            sets us apart.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            TALENT AND AQUISITION
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            At Elesium, we understand that talent acquisition is more than just
            filling positions—it&#39;s about finding the right fit that drives
            your business forward. Leveraging digital marketing, we elevate your
            recruitment strategy by enhancing your employer brand and targeting
            the right candidates. Through precise audience segmentation and
            engaging content, we showcase your company&#39;s values and culture,
            making your brand attractive to top talent. Our use of targeted ads,
            social media campaigns, and SEO strategies ensures your job postings
            reach highly qualified candidates, streamlining the hiring process.
            By continuously analyzing campaign performance and adjusting our
            strategies, we help you attract and retain the best talent, ensuring
            your team is equipped to achieve your business goals.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            SCALABILITY OF PERSONALIZED SERVICE
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            We as a consulting firm helps an interior design business improve
            scalability by analyzing their current processes and identifying
            inefficiencies that hinder growth. They streamline operations,
            implement advanced project management tools, and develop tailored
            strategies that enable the business to handle a larger client base
            without compromising the personalized touch that sets them apart. By
            optimizing resource allocation, enhancing communication channels,
            and leveraging technology, the consulting firm ensures that the
            interior design business can scale its services while maintaining
            high levels of customization and client satisfaction.
          </p>
          <hr className="my-4 border border-slate-300/30" />

          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            SHOWCASING PORTFOLIO
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            At ELESIUM.ONLINE , showcasing your portfolio effectively is crucial
            to demonstrating your expertise and attracting new clients. Through
            our digital marketing strategies, we amplify your portfolio&#39;s impact
            by crafting visually appealing presentations and targeted campaigns
            that highlight your best work. We leverage social media, content
            marketing, and SEO-optimized case studies to reach your ideal
            audience, ensuring your projects are seen by those who matter most.
            Our approach not only enhances your online presence but also tells
            the story behind your work, building trust and credibility. By
            continuously refining these strategies, we help you turn your
            portfolio into a powerful tool for business growth, setting you
            apart from the competition.
          </p>

          <div className="h-60" id="bottom"></div>
        </div>
      </div>
    );
  }
}

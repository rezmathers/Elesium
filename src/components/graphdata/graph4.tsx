
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
  { name: "Day1", ROAS: 1500 },    // Initial phase
  { name: "Day5", ROAS: 3000 },   // Steady growth
  { name: "Day10",  ROAS: 6000 },      // Continued increase
  { name: "Day15",  ROAS: 9000 },      // Accelerated growth
  { name: "Day20", ROAS: 15000 },       // Final target reached
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
              tickFormatter={(value) => `${value / 1000} k`} // Format Y-axis values with &#39;k&#39;
              tickCount={5}
            />
            <Tooltip
              formatter={(value) => {
                if (typeof value === "number") {
                  return `${value / 1000}k Followers`;
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
            <li>WANTED TO HAVE A GREATER SOCIAL MEDIA PRESENCE</li>
            <li>TIME MANAGEMENT</li>
          </ul>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            The Result
          </h2>
          <ul className="text-xl list-disc pl-10 text-slate-400">
            <li>GAINED OVER 15K FOLLOWERS IN THE SPAN OF 3 WEEKS</li>
            <li>GOT A SYSTEMISED WORKFLOW</li>
            <li>GOT FREE TEMPLATES FOR THEWRE EMAIL CAMPAIGNS </li>
            <li>GOT TO WORK WITH US FOR 7 MONTHS IN TOTAL..</li>
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
            This business operates as a high-value design consultancy, where
            purchasing a design service package automatically enters clients
            into the running for exclusive interior design makeovers or premium
            architectural consultations. As seen in the project timeline, these
            exclusive campaigns are not run continuously but rather periodically
            to create anticipation and maintain exclusivity.
            <br />
            <br />
            For example, one design giveaway would be active for 6 weeks,
            followed by a 4-week preparation period before the next launch. Due
            to the complex nature of bespoke design work, we adopted a highly
            systemized approach to streamline operations and minimize any
            potential challenges. Each campaign required an exceptionally high
            volume of fresh marketing content, and this is how we structured our
            strategy to maintain engagement and excitement…
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Social Media Management
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Every week, there interior design business refined its social media
            strategy to keep audiences engaged. For example, at the start of a
            promotional cycle, the focus might be on showcasing &#39;design tips for
            small spaces,&#39; followed by &#39;luxury on a budget&#39; the next week. This
            rapid shift in content themes required new creatives and fresh copy
            angles every 7 days.
            <br />
            <br />
            The high turnover of content and other marketing assets led us to
            develop a robust social media management system that held each team
            member accountable for deliverables. We aimed to produce 7 new video
            posts weekly, complemented by 7 styled images. Each piece of content
            was planned and scripted using proven engagement frameworks and was
            prepared 2 weeks in advance. Additionally, we rolled out 3 email
            newsletters weekly to keep our audience updated and engaged.
            <br />
            <br />
            To streamline this process, we created a management dashboard
            accessible to all team members, ensuring everyone stayed on top of
            crucial deadlines. This dashboard not only enhanced accountability
            but also allowed us to track the performance of each campaign. By
            analyzing the data, we replicated the most effective strategies for
            future posts, quickly identifying which content themes resonated
            best with our audience.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Brand Building
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            With a high volume of creative content being produced, there&#39;s
            always a risk of diluting the brand&#39;s identity. Each piece of
            content, if not carefully crafted, can stray from the core brand
            message, impacting its overall effectiveness. To combat this, we
            developed a comprehensive brand guidance document that acted as the
            backbone of our content creation process.
            <br />
            <br />
            This document served as a crucial tool, ensuring that every
            touchpoint—whether it was social media posts, email copy, blog
            articles, or video content—aligned perfectly with our brand&#39;s
            values, tone, and visual style. By maintaining consistent messaging
            across all marketing efforts, we built a cohesive brand presence
            that guided potential clients seamlessly through our funnel, from
            initial engagement to conversion, reinforcing trust and recognition
            at every step.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Time Management
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Enhance client interactions by integrating an advanced AI-driven
            scheduling tool that dynamically adjusts to real-time changes,
            automates repetitive tasks, and leverages predictive analytics for
            superior time management. This tool not only streamlines appointment
            scheduling and task automation but also forecasts potential
            scheduling conflicts and optimizes resource allocation. By doing so,
            it ensures more efficient use of time and improves overall client
            experience, allowing for better service delivery and increased
            satisfaction.
          </p>
          <hr className="my-4 border border-slate-300/30" />
          <h2 className="md:text-3xl xs:text-2xl mb-2 font-semibold ">
            Conclusion
          </h2>
          <p className="text-xl ml-4 text-slate-400">
            Efficient time management and well-organized operations will
            significantly boost your brand&#39;s success. By streamlining all
            aspects of your social media presence and marketing, you gain clear
            insights into what drives your success, enabling you to focus on
            strategies that deliver results.
            <br />
            <br />
            A consistent brand message is crucial for building a strong
            presence. Developing a brand sheet ensures that all your social
            media content remains aligned with your core identity, making your
            messaging more effective and engaging.
            <br />
            <br />
            Leveraging proven social media strategies allows you to scale your
            presence with confidence. Small, calculated adjustments to
            successful tactics can rejuvenate your social media efforts and
            drive continued growth, ensuring sustained success without taking
            unnecessary risks.
          </p>

          <div className="h-60" id="bottom"></div>
        </div>
      </div>
    );
  }
}

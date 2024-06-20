"use client";
import { Container } from "@/components/Container";

export function About() {
  return (
    <Container>
      <div className="flex w-full flex-col mt-4 items-center justify-center text-center">
        <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Why choose us to fullfil your needs?
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        <div className="flex w-full max-w-xl mx-auto overflow-hidden rounded-2xl bg-indigo-300 bg-gradient-to-tr from-purple-400 to-indigo-700">
          <div className="flex items-start my-8 mx-8 space-x-3">
            <div>
              <h4 className="flex justify-center items-center text-xl font-bold text-white dark:text-black">
                Experienced Team
              </h4>
              <p className="mt-4 text-gray">
                Our team of experts has years of experience in the industry,
                ensuring you receive top-notch services and innovative
                solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-xl mx-auto overflow-hidden rounded-2xl bg-indigo-300 bg-gradient-to-tr from-purple-400 to-indigo-700">
          <div className="flex items-start my-8 mx-8 space-x-3">
            <div>
              <h4 className="flex justify-center items-center text-xl font-bold text-white dark:text-black">
                Customized Solutions
              </h4>
              <p className="mt-4 text-gray">
                We understand that every business is unique. That is why we
                offer customized solutions tailored to meet your specific needs
                and objectives.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-xl mx-auto overflow-hidden rounded-2xl bg-indigo-300 bg-gradient-to-tr from-purple-400 to-indigo-700">
          <div className="flex items-start my-8 mx-8 space-x-3">
            <div>
              <h4 className="flex justify-center items-center text-xl font-bold text-white dark:text-black">
                Proven Results
              </h4>
              <p className="mt-4 text-gray">
                Our strategies are backed by data and proven to deliver results.
                We have a track record of helping businesses increase their
                online visibility, drive traffic, and generate leads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="space-y-2">
        <p>
          <strong>Phone:</strong>{" "}
          <a className="text-blue-500 hover:underline" href="tel:+1234567890">
            +971 (050) 50459-5317
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            className="text-blue-500 hover:underline"
            href="mailto:hello@synctech.global"
          >
            hello@synctech.global
          </a>
        </p>
        <p>
          <strong>Address:</strong> Cra 53 #80-198 Barranquilla, Colombia
        </p>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const contactData = [
  {
    header: "Contact Us",
    data: [
      { key: "Phone", value: "(0385) 2423021" },
      { key: "Fax", value: "(0385) 2423014" },
      { key: "Email", value: "hcm_imphal[at]yahoo[dot]co[dot]in" },
    ],
  },
  {
    header: "Recruitment Queries",
    data: [
      { key: "Phone", value: "6909366903 (10 A.M to 4 P.M)" },
      { key: "Email", value: "imphal[dot]hcm[at]gmail[dot]com" },
    ],
  },
];

export default function ContactUs() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 p-6 bg-gray-50 shadow-md">
      {/* Left Section - Contact Details */}
      <div className="md:w-1/2 p-6 bg-white shadow-lg rounded-lg">
        {contactData.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4">{section.header}</h2>
            {section.data.map((item, dataIndex) => (
              <p key={dataIndex}>
                <strong>{item.key}:</strong> {item.value}
              </p>
            ))}
            {index < contactData.length - 1 && <br />}{" "}
            {/* Add <br/> between sections */}
          </div>
        ))}
      </div>

      {/* Right Section - Map */}
      <div className="md:w-1/2 p-6 bg-white shadow-lg rounded-lg flex justify-center items-center">
        <iframe
          title="High Court of Manipur Location"
          className="w-full h-64 md:h-96 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.854444243447!2d93.93995771505283!3d24.835529924544232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374927c759b4c7f1%3A0x42a42a2b4b0e98f5!2sHigh%20Court%20of%20Manipur!5e0!3m2!1sen!2sin!4v1700000000000"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFooter } from "../../../api/api";
import FooterLink from "./FooterLink";

export default function FooterSection() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    fetchFooter().then((data) => setFooterData(data));
  }, []);

  return (
    <div className="bg-orange-200 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          <div className="flex flex-col space-y-4 col-span-2 md:px-4">
            <p className="text-justify">
              <img
                src="/Images/footer.jpg"
                alt="Supreme Court"
                className="w-20 h-25 float-left mr-4 mb-2"
              />
              Supreme Court of India came up in 1958 and is located on Tilak
              Marg, New Delhi. The Supreme Court of India functioned from the
              Parliament House till it moved to the present building. The court
              has original, appellate, and advisory jurisdiction. It is the
              highest judicial forum and final court of appeal under the
              Constitution of India...
            </p>

            <div className="flex space-x-4">
              {footerData?.socialMedia?.map((socialMedia, ind) => (
                <Link to={socialMedia.link} key={ind}>
                  <img src={socialMedia.icon} alt="social" className="h-9" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {footerData?.footer1?.map((ele, ind) => (
              <FooterLink key={ind} link={ele.link} label={ele.title} />
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            {footerData?.footer2?.map((ele, ind) => (
              <FooterLink key={ind} link={ele.link} label={ele.title} />
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            {footerData?.footer3?.map((ele, ind) => (
              <FooterLink key={ind} link={ele.link} label={ele.title} />
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            {footerData?.footer4?.map((ele, ind) => (
              <FooterLink key={ind} link={ele.link} label={ele.title} />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          {footerData?.copyright}
        </div>
      </div>
    </div>
  );
}

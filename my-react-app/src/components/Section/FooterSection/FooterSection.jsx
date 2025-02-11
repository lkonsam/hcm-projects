import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFooter } from "../../../api/api";
import FooterLink from "./FooterLink";
import Logo from "../../Logo/Logo";

export default function FooterSection() {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    fetchFooter().then((data) => setFooterData(data));
  }, []);

  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col space-y-4">
            <Logo />
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
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          {footerData?.copyright}
        </div>
      </div>
    </div>
  );
}

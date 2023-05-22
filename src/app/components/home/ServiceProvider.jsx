import styles from "@/app/styles/styles";
import React from "react";

const ServiceProvider = () => {
  return (
    <div className="bg-[#F1FAFF] pt-12 pb-12  md:pt-20 md:pb-28">
      <div className={styles.width}>
        <h2 className={`${styles.heading} md:w-3/5`}>
          Are you tired of{" "}
          <span className="text-[#EF4444]">slow and unreliable</span> internet
          service in your rural community?{" "}
        </h2>
        <p className={`${styles.paragraph} md:w-[65%] mt-3 mb-5`}>
          Look no further! Swift-Net.ca is the leading wireless internet service
          provider (WISP) in Alberta and Saskatchewan. We're dedicated to
          bringing high-speed home wi-fi to rural communities like Lloydminster,
          Cold Lake, North Battleford, and more!
        </p>
        <div>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1LARWGTZKPP8favoAhVhO3dLb8cA-cBU&ehbc=2E312F"
            className="w-full h-[600px] rounded-md"

          ></iframe>
        </div>
        <p className={`${styles.paragraph} md:w-[65%] mt-5`}>
          Experience the difference with Swift-Net.ca's reliable internet
          service, designed specifically for rural communities in Alberta and
          Saskatchewan. Sign up today and enjoy fast and dependable home wi-fi
          for you and your family!
        </p>
      </div>
    </div>
  );
};

export default ServiceProvider;

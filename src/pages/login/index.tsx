import React, { useState } from "react";
import logoBack from "./../../assets/curve.svg";
import logoFront from "../../assets/Logo.svg";
import Input from "../../components/base/input/Input";
import lockIcon from "../../assets/lockIcon.svg";
import closeEye from "../../assets/closeEye.svg";
import keyIcon from "../../assets/key.svg";
import CustomLink from "../../components/common/custom-link";
import Switch from "../../components/base/switch";
import { CustomButton } from "../../components/base/button/Button";
import "./style.css";
import powerIcon from "../../assets/peerage.png";

export default function Login() {
  const [switchValue, setSwitchValue] = useState(false);
  return (
    <div className="login ">
      <div className="flex flex-col md:flex-row container max-w-5xl">
        <div className="w-100 text-center md:w-1/2">
          <h2 className="mb-2 text-primary-dark text-4xl">Welcome!!</h2>
          <h6 className="text-primary-light text-xs">Follow Your School at Your Palm..</h6>
          <div className="relative w-full mt-10">
            <img src={logoBack} alt="logo" />
            <img className="absolute top-8 left-0" src={logoFront} alt="logo" />
          </div>
        </div>
        <div className="w-100 md:w-1/2 max-w-xs mx-auto">
          <h2 className="mb-6 mt-10 md:mt-0 text-3xl text-primary text-center">Get Started</h2>
          <div className="mb-6 custom-form xs:px-10 ">
            <div className="mb-4">
              <label style={{}} className="mb-1 text-primary-dark text-start font-medium text-xl">
                User ID
              </label>
              <Input
                placeholder="Type your User ID"
                border="3px solid #000000"
                brRadius="12px"
                bgColor="#FFFCFC"
                leftIcon={lockIcon}
                height="36px"
              />
            </div>

            <div className="">
              <label style={{}} className="mb-1 text-primary-dark font-medium text-start text-xl">
                Password
              </label>
              <Input
                placeholder="Type your Password"
                border="3px solid #000000"
                brRadius="12px"
                bgColor="#FFFCFC"
                leftIcon={keyIcon}
                rightIcon={closeEye}
                height="36px"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <CustomLink url="/login" className="text-[#FF0C0C] italic text-xs underline">
              Forgot Password?
            </CustomLink>

            <div className="flex items-center w-max">
              <CustomLink url="/login" className="text-[#FF0C0C] italic text-xs">
                Remember Me
              </CustomLink>
              <Switch
                className="ml-4"
                width="24px"
                height="10px"
                value={switchValue}
                onClick={() => setSwitchValue(!switchValue)}
              />
            </div>
          </div>
          <div className="mb-6 w-max mx-auto">
            <CustomButton label="Log in" className="btn-style" />
          </div>
          <p className="w-max mx-auto  text-xs flex items-center text-primary">
            Don’t have an ID?
            <CustomLink className="ml-1 text-[#0B599F] text-base font-medium underline" url="/register">
              Register here
            </CustomLink>
          </p>
          <div className="  mt-16 mx-auto w-max">
            <p className="text-primary-light text-center">Powered By</p>
            <img width="100px" src={powerIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

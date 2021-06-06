import React from 'react'


const IconFacebook = ({footer}) => {
    return (
      <a href={"https://www.facebook.com/fizjoterapia.kamilasplocharska"} target={"_blank"}>
        <svg width={footer ? "10" : "28"} height="27" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5887 11.9559H10.3096V14.235H12.5887V21.0724H16.0073V14.235H18.0813L18.2865 11.9559H16.0073V11.0067C16.0073 10.462 16.1167 10.2466 16.6432 10.2466H18.2865V7.39771H15.547C13.498 7.39771 12.5887 8.30023 12.5887 10.0278V11.9559Z" fill="#846A61"/>
          <rect x="1.97539" y="1.9124" width="24.6454" height="24.6454" rx="6.58628" stroke="#846A61" stroke-width="2.42461"/>
        </svg>
      </a>
    )
  }
  
export default IconFacebook
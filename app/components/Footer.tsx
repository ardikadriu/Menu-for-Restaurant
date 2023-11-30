import React from "react";

const Footer = () => {
  return (
    <div className="  flex flex-col items-end">
      <div className=" text-center mr-[50px] mt-[79px]">
        <h1 className="text-white text-[29px]">Free Home Delivery</h1>
        <div className="border-2 broder-white border-solid w-[282px]"></div>
        <h2 className="text-white mt-[14px]">
          Minimum Order 200rs in 2km only
        </h2>
      </div>
      <div className="mt-[97px]">
        <div className="flex mr-[23px] items-center">
          <svg
            width="39"
            height="34"
            viewBox="0 0 39 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.59 18.4167C31.2325 18.4167 30.8588 18.3175 30.5013 18.2467C29.7773 18.1076 29.0658 17.9229 28.3725 17.6942C27.6186 17.4551 26.79 17.4675 26.046 17.729C25.302 17.9906 24.6953 18.4827 24.3425 19.1108L23.985 19.7483C22.4023 18.9808 20.9478 18.0274 19.6625 16.915C18.3865 15.7944 17.293 14.5265 16.4125 13.1467L17.095 12.75C17.8155 12.4425 18.38 11.9135 18.68 11.2649C18.98 10.6163 18.9943 9.89387 18.72 9.23666C18.462 8.63093 18.2503 8.01096 18.0863 7.38083C18.005 7.06917 17.94 6.74333 17.8913 6.4175C17.6939 5.41963 17.0944 4.51597 16.2006 3.86925C15.3069 3.22254 14.1776 2.87528 13.0162 2.89H8.14125C7.44093 2.88427 6.74741 3.01015 6.1079 3.25908C5.4684 3.50802 4.89793 3.87415 4.43532 4.33256C3.97272 4.79098 3.62884 5.33091 3.42711 5.91559C3.22537 6.50028 3.1705 7.116 3.26625 7.72083C4.13195 13.6558 7.24105 19.1702 12.1024 23.3929C16.9638 27.6156 23.3004 30.3061 30.1113 31.0392H30.7288C31.927 31.0407 33.084 30.6574 33.9788 29.9625C34.4928 29.5616 34.9035 29.0702 35.1836 28.5208C35.4638 27.9713 35.6069 27.3763 35.6037 26.775V22.525C35.5838 21.541 35.1728 20.5934 34.4408 19.8442C33.7088 19.0949 32.7012 18.5904 31.59 18.4167ZM32.4025 26.9167C32.4022 27.1178 32.3528 27.3166 32.2575 27.4998C32.1623 27.683 32.0233 27.8464 31.85 27.9792C31.6684 28.1158 31.4561 28.2179 31.2267 28.2789C30.9972 28.3399 30.7557 28.3584 30.5175 28.3333C24.4317 27.6531 18.7789 25.2259 14.4507 21.4346C10.1224 17.6433 7.36517 12.7037 6.61375 7.395C6.58789 7.18748 6.61055 6.97755 6.68038 6.77789C6.7502 6.57822 6.86574 6.39297 7.02 6.23333C7.17228 6.08222 7.35972 5.96111 7.56987 5.87806C7.78001 5.79501 8.00802 5.75192 8.23875 5.75167H13.1137C13.4916 5.74433 13.8606 5.85208 14.1572 6.05635C14.4538 6.26062 14.6595 6.54864 14.7387 6.87083C14.8037 7.25805 14.885 7.64055 14.9825 8.01833C15.1702 8.76512 15.42 9.499 15.73 10.2142L13.455 11.135C13.2605 11.2128 13.0855 11.3233 12.9401 11.4603C12.7948 11.5972 12.6818 11.7578 12.6078 11.9329C12.5339 12.1079 12.5003 12.294 12.509 12.4804C12.5177 12.6669 12.5686 12.8499 12.6587 13.0192C14.9975 17.3864 19.0243 20.897 24.0338 22.9358C24.4294 23.0775 24.8731 23.0775 25.2688 22.9358C25.4714 22.8726 25.6576 22.775 25.8167 22.6485C25.9757 22.5221 26.1043 22.3693 26.195 22.1992L27.2025 20.2158C28.0426 20.4777 28.9 20.6954 29.77 20.8675C30.2033 20.9525 30.6421 21.0233 31.0862 21.08C31.4558 21.1491 31.7862 21.3284 32.0205 21.587C32.2548 21.8455 32.3784 22.1672 32.37 22.4967L32.4025 26.9167Z"
              fill="#FFFDFD"
            />
          </svg>
          <h1 className="text-white text-[45px] ml-[5px] ">9982389670</h1>
        </div>
        <div className="max-w-[348px] text-white">
          <p>
            Plot No. 14, Kalyan Nagar, Opp VKI 5 No. Police Station, Khatu Shyam
            Ji Mandir Road, Jaipur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
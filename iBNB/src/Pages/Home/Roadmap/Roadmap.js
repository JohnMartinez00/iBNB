import Roadmap_img01 from "./Roadmap_img01.png";
import Roadmap_img02 from "./Roadmap_img02.png";
import React, { useState } from "react";
import "./Roadmap.css";

export default function Roadmap() {
  const [cardOption, setCardOption] = useState(false);
  return (
    <div className="w-full">
      <div id="Roadmap" className="Roadmap m-auto">
        <div className="Roadmap_container mx-auto">
          <p className="Roadmap_title">Roadmap</p>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="img_01 z-1">
              <img src={Roadmap_img01}></img>
            </div>
            <div className="card_container">
              <div className="card_logo card_logo_color01 items-center flex flex-wrap justify-center mb-5">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.60254 18.8346C1.60254 19.5786 1.89808 20.2921 2.42415 20.8182C2.95022 21.3443 3.66373 21.6398 4.40771 21.6398H21.2387C21.9827 21.6398 22.6962 21.3443 23.2223 20.8182C23.7483 20.2921 24.0439 19.5786 24.0439 18.8346V11.1204H1.60254V18.8346ZM4.90863 15.0276C4.90863 14.6291 5.06696 14.2468 5.34878 13.965C5.6306 13.6832 6.01284 13.5249 6.4114 13.5249H8.81583C9.21439 13.5249 9.59662 13.6832 9.87845 13.965C10.1603 14.2468 10.3186 14.6291 10.3186 15.0276V16.0295C10.3186 16.428 10.1603 16.8103 9.87845 17.0921C9.59662 17.3739 9.21439 17.5322 8.81583 17.5322H6.4114C6.01284 17.5322 5.6306 17.3739 5.34878 17.0921C5.06696 16.8103 4.90863 16.428 4.90863 16.0295V15.0276Z"
                    fill="white"
                  />
                  <path
                    opacity="0.6"
                    d="M21.2387 4.00732H4.40771C3.66373 4.00732 2.95022 4.30287 2.42415 4.82894C1.89808 5.35501 1.60254 6.06852 1.60254 6.81249V8.11489H24.0439V6.81249C24.0439 6.06852 23.7483 5.35501 23.2223 4.82894C22.6962 4.30287 21.9827 4.00732 21.2387 4.00732Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="mb-4">
                Q1-Q2 2022 &nbsp; &nbsp; | &nbsp;&nbsp;iBNB
              </p>
              <h2 className="card_subtitle mb-4">
                <strong>Release of my iBNB</strong>
              </h2>
              <div className="flex justify-start items-start mb-4">
                <div className="card_list_logo flex justify-between items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.98338 0.87207C4.51085 0.87207 0.87207 4.51085 0.87207 8.98338C0.87207 13.4559 4.51085 17.0947 8.98338 17.0947C13.4559 17.0947 17.0947 13.4559 17.0947 8.98338C17.0947 4.51085 13.4559 0.87207 8.98338 0.87207ZM7.50151 13.0539L4.35837 9.56092L5.28611 8.726L7.46992 11.1524L12.6491 4.98466L13.6061 5.78565L7.50151 13.0539Z"
                      fill="#F1A19B"
                    />
                  </svg>
                </div>
                <p className="leading-6">
                  <strong>Integration of Visa/Mastercard</strong>
                </p>
              </div>
              <div className="flex flex-nowrap flex-row justify-start items-start mb-4">
                <div className="card_list_logo">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.98338 0.87207C4.51085 0.87207 0.87207 4.51085 0.87207 8.98338C0.87207 13.4559 4.51085 17.0947 8.98338 17.0947C13.4559 17.0947 17.0947 13.4559 17.0947 8.98338C17.0947 4.51085 13.4559 0.87207 8.98338 0.87207ZM7.50151 13.0539L4.35837 9.56092L5.28611 8.726L7.46992 11.1524L12.6491 4.98466L13.6061 5.78565L7.50151 13.0539Z"
                      fill="#F1A19B"
                    />
                  </svg>
                </div>
                <p className="leading-6">
                  <strong>Visa/Mastercard</strong> is integrated into the mobile
                  application to allow iBNB investors to purchase iBNB tokens
                  directly with credit/debit cards.
                </p>
              </div>
              <div className="flex justify-start items-start mb-4">
                <div className="card_list_logo">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.98338 0.87207C4.51085 0.87207 0.87207 4.51085 0.87207 8.98338C0.87207 13.4559 4.51085 17.0947 8.98338 17.0947C13.4559 17.0947 17.0947 13.4559 17.0947 8.98338C17.0947 4.51085 13.4559 0.87207 8.98338 0.87207ZM7.50151 13.0539L4.35837 9.56092L5.28611 8.726L7.46992 11.1524L12.6491 4.98466L13.6061 5.78565L7.50151 13.0539Z"
                      fill="#F1A19B"
                    />
                  </svg>
                </div>
                <p className="leading-6">More wallets</p>
              </div>
              <div className="flex justify-start items-start mb-4">
                <div className="card_list_logo">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.98338 0.87207C4.51085 0.87207 0.87207 4.51085 0.87207 8.98338C0.87207 13.4559 4.51085 17.0947 8.98338 17.0947C13.4559 17.0947 17.0947 13.4559 17.0947 8.98338C17.0947 4.51085 13.4559 0.87207 8.98338 0.87207ZM7.50151 13.0539L4.35837 9.56092L5.28611 8.726L7.46992 11.1524L12.6491 4.98466L13.6061 5.78565L7.50151 13.0539Z"
                      fill="#F1A19B"
                    />
                  </svg>
                </div>
                <p className="leading-6">
                  <strong>The mobile application</strong>
                  integrates allowing multiple wallets into the mobile
                  applications where users...
                </p>
              </div>
              <div className="flex justify-start items-start mb-4">
                <div className="card_list_logo">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.98338 0.87207C4.51085 0.87207 0.87207 4.51085 0.87207 8.98338C0.87207 13.4559 4.51085 17.0947 8.98338 17.0947C13.4559 17.0947 17.0947 13.4559 17.0947 8.98338C17.0947 4.51085 13.4559 0.87207 8.98338 0.87207ZM7.50151 13.0539L4.35837 9.56092L5.28611 8.726L7.46992 11.1524L12.6491 4.98466L13.6061 5.78565L7.50151 13.0539Z"
                      fill="#F1A19B"
                    />
                  </svg>
                </div>
                <p className="leading-6">
                  <strong>NFT Marketplace/Displaying NFTs</strong>
                  <br></br>
                  The mobile application integrates the NFT marketplace for nBNB
                  investors to trade NFTs and allows users to view their
                  collectables directly from the mobile application
                </p>
              </div>
              <p>
                <strong className="flex flex-nowrap items-center">
                  Read Less &nbsp;
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0542 5.82452C9.2699 6.05778 9.62039 6.0586 9.83703 5.82633C10.034 5.61519 10.0525 5.28411 9.89218 5.0504L9.83871 4.98343L5.39263 0.17548C5.19594 -0.0372114 4.88735 -0.0565596 4.67031 0.117444L4.60814 0.175445L0.16132 4.98339C-0.0544048 5.21664 -0.0536792 5.59402 0.162941 5.8263C0.359869 6.03746 0.667429 6.05601 0.883799 5.8824L0.945772 5.82455L5.00059 1.44095L9.0542 5.82452Z"
                      fill="#353539"
                    />
                  </svg>
                </strong>
              </p>
            </div>
          </div>
          <div className="dotted-line m-auto flex justify-center items-center">
            <svg
              width="532"
              height="155"
              viewBox="0 0 532 155"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M531 0V0C531 40.9027 497.842 74.0609 456.939 74.0609H81.9391C37.2377 74.0609 1 110.299 1 155V155"
                stroke="#D3D3D3"
                stroke-width="2"
                stroke-dasharray="4 4"
              />
            </svg>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="card_container">
              <div className="card_logo card_logo_color02 items-center flex flex-wrap justify-center mb-5">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0315 22.863L5.07786 22.863C4.49616 22.8624 3.93846 22.631 3.52713 22.2197C3.1158 21.8083 2.88444 21.2506 2.88379 20.6689L2.88379 10.9743C2.88444 10.3926 3.1158 9.83495 3.52713 9.42362C3.93846 9.01229 4.49616 8.78092 5.07786 8.78027L21.0315 8.78027C21.6132 8.78092 22.1709 9.01229 22.5822 9.42362C22.9935 9.83494 23.2249 10.3926 23.2255 10.9743L23.2255 20.6689C23.2249 21.2506 22.9935 21.8083 22.5822 22.2197C22.1709 22.631 21.6132 22.8624 21.0315 22.863Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    d="M18.5318 5.65081L7.57857 5.65081C7.37107 5.65081 7.17207 5.56838 7.02535 5.42166C6.87862 5.27493 6.79619 5.07593 6.79619 4.86843C6.79619 4.66094 6.87862 4.46194 7.02535 4.31521C7.17207 4.16849 7.37107 4.08606 7.57857 4.08606L18.5318 4.08606C18.7393 4.08606 18.9383 4.16849 19.085 4.31521C19.2318 4.46194 19.3142 4.66094 19.3142 4.86843C19.3142 5.07593 19.2318 5.27493 19.085 5.42166C18.9383 5.56838 18.7393 5.65081 18.5318 5.65081ZM20.0966 7.99793L6.01382 7.99793C5.80632 7.99793 5.60732 7.9155 5.4606 7.76878C5.31387 7.62206 5.23145 7.42306 5.23145 7.21556C5.23145 7.00806 5.31387 6.80906 5.4606 6.66234C5.60732 6.51561 5.80632 6.43318 6.01382 6.43318L20.0966 6.43318C20.3041 6.43318 20.5031 6.51561 20.6498 6.66234C20.7965 6.80906 20.8789 7.00806 20.8789 7.21556C20.8789 7.42306 20.7965 7.62206 20.6498 7.76878C20.5031 7.9155 20.3041 7.99793 20.0966 7.99793Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="mb-4">
                Q3-Q4 2022 &nbsp; &nbsp; | &nbsp;&nbsp;iBNB
              </p>
              <h2 className="card_subtitle mb-4">Release of my iBNB</h2>
              <p className="mb-4">
                my iBNB aligns closer to the purpose of iBNB by developing
                financial guidance systems for investors to{" "}
              </p>
              <div className="flex flex-nowrap flex-row justify-start items-start mb-4">
                <div className="card_list_logo">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.98338 0.87207C4.51085 0.87207 0.87207 4.51085 0.87207 8.98338C0.87207 13.4559 4.51085 17.0947 8.98338 17.0947C13.4559 17.0947 17.0947 13.4559 17.0947 8.98338C17.0947 4.51085 13.4559 0.87207 8.98338 0.87207ZM7.50151 13.0539L4.35837 9.56092L5.28611 8.726L7.46992 11.1524L12.6491 4.98466L13.6061 5.78565L7.50151 13.0539Z"
                      fill="#F1A19B"
                    />
                  </svg>
                </div>
                <p>
                  develop investment plans that support their goals towards
                  financial freedom.
                </p>
              </div>
              <div className="flex justify-start items-start mb-4">
                <div className="card_list_logo">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.98338 0.87207C4.51085 0.87207 0.87207 4.51085 0.87207 8.98338C0.87207 13.4559 4.51085 17.0947 8.98338 17.0947C13.4559 17.0947 17.0947 13.4559 17.0947 8.98338C17.0947 4.51085 13.4559 0.87207 8.98338 0.87207ZM7.50151 13.0539L4.35837 9.56092L5.28611 8.726L7.46992 11.1524L12.6491 4.98466L13.6061 5.78565L7.50151 13.0539Z"
                      fill="#F1A19B"
                    />
                  </svg>
                </div>
                Social Content Feeds
              </div>
              <p className="mb-4">
                Financial experts are provided with environments to create and
                share financial articles for mobile app users in a social
                environment with incentives for contributors to benefit from
                creating quality content.
              </p>
            </div>
            <div className="img_02">
              <img src={Roadmap_img02}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

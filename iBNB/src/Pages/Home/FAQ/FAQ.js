import react, { useState } from "react";
import "./FAQ.css";
import video from "./video.png";

const FAQ = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  return (
    <div className="w-full">
      <div className="faq_container mx-auto">
        <p className="faq_title">FAQ</p>
        <input
          type="text"
          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search"
          className="mb-8 outline-none border-bottom"
        ></input>
        <p className="sort_tag">Sort by tags</p>
        <div className="flex">
          <button type="button" className="btn_faq mr-3 px-5 py-3 uppercase">
            all
          </button>
          <button type="button" className="btn_faq mr-3 px-5 py-3 uppercase">
            core
          </button>
          <button type="button" className="btn_faq mr-3 px-5 py-3 uppercase">
            tech
          </button>
          <button type="button" className="btn_faq mr-3 px-5 py-3 uppercase">
            development
          </button>
          <button type="button" className="btn_faq mr-3 px-5 py-3 uppercase">
            design
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
          <div className="grid_attr">
            <h2 className="video">Videos for this topic</h2>
            <div>
              <img src={video} className="img_video"></img>
            </div>
            <div className="flex flex-col">
              <div
                onClick={(show) => {
                  setShow((show) => !show);
                }}
              >
                <p className="content_info self-left">
                  What's iBNB?&nbsp;
                  {show ? (
                    <i class="fas fa-chevron-up"></i>
                  ) : (
                    <i class="fas fa-chevron-down"></i>
                  )}
                </p>
              </div>
              <p className={show ? "content_mg" : "hidden"}>
                iBNB is an ecosystem built to revolutionise decentralised
                finance and provide the most superior daily dividends in crypto.
                The Dynamic Transaction Protocol (DTP-3) dynamically manages
                transaction fee percentages according to the health of liquidity
                measured by liquidity to market-cap ratio. Advanced dividend
                pools provide sustainable daily dividends directly collectable
                from the website's dashboard, and financial tools empower
                investors to make wise investment decisions on the nBNB network.
              </p>
              <div className="my-8 line"></div>
            </div>
            <div className="flex flex-col">
              <div
                onClick={(show2) => {
                  setShow2((show2) => !show2);
                }}
              >
                <p className="content_info self-left">
                  What's iBNB?&nbsp;
                  {show2 ? (
                    <i class="fas fa-chevron-up"></i>
                  ) : (
                    <i class="fas fa-chevron-down"></i>
                  )}
                </p>
              </div>
              <p className={show2 ? "content_mg" : "hidden"}>
                iBNB is an ecosystem built to revolutionise decentralised
                finance and provide the most superior daily dividends in crypto.
                The Dynamic Transaction Protocol (DTP-3) dynamically manages
                transaction fee percentages according to the health of liquidity
                measured by liquidity to market-cap ratio. Advanced dividend
                pools provide sustainable daily dividends directly collectable
                from the website's dashboard, and financial tools empower
                investors to make wise investment decisions on the nBNB network.
              </p>
              <div className="my-8 line"></div>
            </div>
          </div>
          <div className="grid_attr">
            <div className="flex flex-col">
              <div
                onClick={(show3) => {
                  setShow3((show3) => !show3);
                }}
              >
                <p className="content_info self-left">
                  What's iBNB?&nbsp;
                  {show3 ? (
                    <i class="fas fa-chevron-up"></i>
                  ) : (
                    <i class="fas fa-chevron-down"></i>
                  )}
                </p>
              </div>
              <p className={show3 ? "content_mg" : "hidden"}>
                iBNB is an ecosystem built to revolutionise decentralised
                finance and provide the most superior daily dividends in crypto.
                The Dynamic Transaction Protocol (DTP-3) dynamically manages
                transaction fee percentages according to the health of liquidity
                measured by liquidity to market-cap ratio. Advanced dividend
                pools provide sustainable daily dividends directly collectable
                from the website's dashboard, and financial tools empower
                investors to make wise investment decisions on the nBNB network.
              </p>
              <div className="my-8 line"></div>
            </div>
            <div className="flex flex-col">
              <div
                onClick={(show4) => {
                  setShow4((show4) => !show4);
                }}
              >
                <p className="content_info self-left">
                  What's iBNB?&nbsp;
                  {show4 ? (
                    <i class="fas fa-chevron-up"></i>
                  ) : (
                    <i class="fas fa-chevron-down"></i>
                  )}
                </p>
              </div>
              <p className={show4 ? "content_mg" : "hidden"}>
                iBNB is an ecosystem built to revolutionise decentralised
                finance and provide the most superior daily dividends in crypto.
                The Dynamic Transaction Protocol (DTP-3) dynamically manages
                transaction fee percentages according to the health of liquidity
                measured by liquidity to market-cap ratio. Advanced dividend
                pools provide sustainable daily dividends directly collectable
                from the website's dashboard, and financial tools empower
                investors to make wise investment decisions on the nBNB network.
              </p>
              <div className="my-8 line"></div>
            </div>
            <div className="flex flex-col">
              <div
                onClick={(show5) => {
                  setShow5((show5) => !show5);
                }}
              >
                <p className="content_info self-left">
                  What's iBNB?&nbsp;
                  {show5 ? (
                    <i class="fas fa-chevron-up"></i>
                  ) : (
                    <i class="fas fa-chevron-down"></i>
                  )}
                </p>
              </div>
              <p className={show5 ? "content_mg" : "hidden"}>
                iBNB is an ecosystem built to revolutionise decentralised
                finance and provide the most superior daily dividends in crypto.
                The Dynamic Transaction Protocol (DTP-3) dynamically manages
                transaction fee percentages according to the health of liquidity
                measured by liquidity to market-cap ratio. Advanced dividend
                pools provide sustainable daily dividends directly collectable
                from the website's dashboard, and financial tools empower
                investors to make wise investment decisions on the nBNB network.
              </p>
              <div className="my-8 line"></div>
            </div>
            <div className="flex flex-col">
              <div
                onClick={(show6) => {
                  setShow6((show6) => !show6);
                }}
              >
                <p className="content_info self-left">
                  What's iBNB?&nbsp;
                  {show6 ? (
                    <i class="fas fa-chevron-up"></i>
                  ) : (
                    <i class="fas fa-chevron-down"></i>
                  )}
                </p>
              </div>
              <p className={show6 ? "content_mg" : "hidden"}>
                iBNB is an ecosystem built to revolutionise decentralised
                finance and provide the most superior daily dividends in crypto.
                The Dynamic Transaction Protocol (DTP-3) dynamically manages
                transaction fee percentages according to the health of liquidity
                measured by liquidity to market-cap ratio. Advanced dividend
                pools provide sustainable daily dividends directly collectable
                from the website's dashboard, and financial tools empower
                investors to make wise investment decisions on the nBNB network.
              </p>
              <div className="my-8 line"></div>
            </div>
          </div>
        </div>
        <div className="more_info flex flex-col lg:flex-row justify-between items-start">
          <div className="info_main">Want to find more information?</div>
          <div className="info_right flex flex-col">
            <p className="info_content mb-6">
              Read our Whitepaper to learn about how iBNB works or start AI
              chat.{" "}
            </p>
            <div className="flex flex-wrap justify-between">
              <button type="button" className="info_chat items-center flex">
                <svg
                  width="134"
                  height="36"
                  viewBox="0 0 134 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.1386 23.208C46.0613 23.208 45.144 22.9627 44.3866 22.472C43.64 21.9813 43.1173 21.3093 42.8186 20.456L44.4026 19.528C44.8506 20.7867 45.7786 21.416 47.1866 21.416C47.88 21.416 48.3973 21.2827 48.7386 21.016C49.0906 20.7387 49.2666 20.3813 49.2666 19.944C49.2666 19.4853 49.08 19.1387 48.7066 18.904C48.3333 18.6587 47.672 18.392 46.7226 18.104C46.1893 17.944 45.7573 17.7947 45.4266 17.656C45.096 17.5173 44.744 17.3253 44.3706 17.08C44.008 16.824 43.736 16.5093 43.5546 16.136C43.3733 15.7627 43.2826 15.3253 43.2826 14.824C43.2826 13.832 43.6346 13.048 44.3386 12.472C45.0426 11.8853 45.8906 11.592 46.8826 11.592C47.7786 11.592 48.5626 11.8107 49.2346 12.248C49.9066 12.6853 50.424 13.288 50.7866 14.056L49.2346 14.952C48.7653 13.9067 47.9813 13.384 46.8826 13.384C46.3493 13.384 45.9226 13.512 45.6026 13.768C45.2826 14.0133 45.1226 14.3493 45.1226 14.776C45.1226 15.192 45.2826 15.5227 45.6026 15.768C45.9333 16.0027 46.5253 16.2533 47.3786 16.52C47.8053 16.6587 48.1146 16.7653 48.3066 16.84C48.5093 16.904 48.7866 17.0107 49.1386 17.16C49.5013 17.3093 49.7733 17.4587 49.9546 17.608C50.136 17.7573 50.328 17.944 50.5306 18.168C50.744 18.392 50.8933 18.648 50.9786 18.936C51.064 19.224 51.1066 19.5493 51.1066 19.912C51.1066 20.9253 50.7386 21.7307 50.0026 22.328C49.2773 22.9147 48.3226 23.208 47.1386 23.208ZM56.4095 16.664H54.4255V20.504C54.4255 20.8347 54.5002 21.0747 54.6495 21.224C54.7988 21.3627 55.0175 21.4427 55.3055 21.464C55.6042 21.4747 55.9722 21.4693 56.4095 21.448V23C55.0868 23.16 54.1375 23.048 53.5615 22.664C52.9855 22.2693 52.6975 21.5493 52.6975 20.504V16.664H51.2255V15H52.6975V13.272L54.4255 12.76V15H56.4095V16.664ZM63.5846 15H65.3126V23H63.5846V21.848C62.934 22.7547 62.0006 23.208 60.7846 23.208C59.686 23.208 58.7473 22.8027 57.9686 21.992C57.19 21.1707 56.8006 20.1733 56.8006 19C56.8006 17.816 57.19 16.8187 57.9686 16.008C58.7473 15.1973 59.686 14.792 60.7846 14.792C62.0006 14.792 62.934 15.24 63.5846 16.136V15ZM59.2486 20.84C59.7286 21.32 60.3313 21.56 61.0566 21.56C61.782 21.56 62.3846 21.32 62.8646 20.84C63.3446 20.3493 63.5846 19.736 63.5846 19C63.5846 18.264 63.3446 17.656 62.8646 17.176C62.3846 16.6853 61.782 16.44 61.0566 16.44C60.3313 16.44 59.7286 16.6853 59.2486 17.176C58.7686 17.656 58.5286 18.264 58.5286 19C58.5286 19.736 58.7686 20.3493 59.2486 20.84ZM68.6547 16.344C69.0921 15.352 69.9134 14.856 71.1187 14.856V16.728C70.4574 16.6853 69.8814 16.8453 69.3907 17.208C68.9001 17.56 68.6547 18.1467 68.6547 18.968V23H66.9267V15H68.6547V16.344ZM76.6626 16.664H74.6786V20.504C74.6786 20.8347 74.7533 21.0747 74.9026 21.224C75.052 21.3627 75.2706 21.4427 75.5586 21.464C75.8573 21.4747 76.2253 21.4693 76.6626 21.448V23C75.34 23.16 74.3906 23.048 73.8146 22.664C73.2386 22.2693 72.9506 21.5493 72.9506 20.504V16.664H71.4786V15H72.9506V13.272L74.6786 12.76V15H76.6626V16.664ZM88.916 23L88.132 20.744H83.364L82.58 23H80.58L84.644 11.8H86.852L90.9 23H88.916ZM83.972 19.016H87.524L85.748 13.96L83.972 19.016ZM91.7044 11.8H93.5444V23H91.7044V11.8ZM104.278 23.208C102.593 23.208 101.196 22.6533 100.086 21.544C98.9772 20.424 98.4225 19.0427 98.4225 17.4C98.4225 15.7573 98.9772 14.3813 100.086 13.272C101.196 12.152 102.593 11.592 104.278 11.592C105.292 11.592 106.225 11.832 107.078 12.312C107.942 12.792 108.614 13.4427 109.094 14.264L107.495 15.192C107.196 14.6373 106.758 14.2 106.182 13.88C105.617 13.5493 104.982 13.384 104.278 13.384C103.084 13.384 102.113 13.7627 101.366 14.52C100.63 15.2773 100.262 16.2373 100.262 17.4C100.262 18.5627 100.63 19.5227 101.366 20.28C102.113 21.0373 103.084 21.416 104.278 21.416C104.982 21.416 105.622 21.256 106.198 20.936C106.774 20.6053 107.206 20.1627 107.495 19.608L109.094 20.52C108.625 21.3413 107.958 21.9973 107.094 22.488C106.241 22.968 105.302 23.208 104.278 23.208ZM114.397 14.792C115.315 14.792 116.056 15.0853 116.621 15.672C117.187 16.2587 117.469 17.064 117.469 18.088V23H115.741V18.264C115.741 17.6667 115.581 17.208 115.261 16.888C114.941 16.568 114.504 16.408 113.949 16.408C113.341 16.408 112.851 16.6 112.477 16.984C112.104 17.3573 111.917 17.9333 111.917 18.712V23H110.189V11.8H111.917V16.024C112.44 15.2027 113.267 14.792 114.397 14.792ZM125.266 15H126.994V23H125.266V21.848C124.615 22.7547 123.682 23.208 122.466 23.208C121.367 23.208 120.429 22.8027 119.65 21.992C118.871 21.1707 118.482 20.1733 118.482 19C118.482 17.816 118.871 16.8187 119.65 16.008C120.429 15.1973 121.367 14.792 122.466 14.792C123.682 14.792 124.615 15.24 125.266 16.136V15ZM120.93 20.84C121.41 21.32 122.013 21.56 122.738 21.56C123.463 21.56 124.066 21.32 124.546 20.84C125.026 20.3493 125.266 19.736 125.266 19C125.266 18.264 125.026 17.656 124.546 17.176C124.066 16.6853 123.463 16.44 122.738 16.44C122.013 16.44 121.41 16.6853 120.93 17.176C120.45 17.656 120.21 18.264 120.21 19C120.21 19.736 120.45 20.3493 120.93 20.84ZM133.072 16.664H131.088V20.504C131.088 20.8347 131.163 21.0747 131.312 21.224C131.461 21.3627 131.68 21.4427 131.968 21.464C132.267 21.4747 132.635 21.4693 133.072 21.448V23C131.749 23.16 130.8 23.048 130.224 22.664C129.648 22.2693 129.36 21.5493 129.36 20.504V16.664H127.888V15H129.36V13.272L131.088 12.76V15H133.072V16.664Z"
                    fill="#F8F8F9"
                  />
                  <circle cx="18" cy="18" r="18" fill="#1F1F23" />
                  <g clip-path="url(#clip0_1363_16252)">
                    <path
                      d="M25.2208 11.0974L10.4458 16.7948C9.4375 17.1999 9.44333 17.7623 10.2608 18.0132L14.0542 19.1965L22.8308 13.659C23.2458 13.4065 23.625 13.5423 23.3133 13.819L16.2025 20.2365H16.2008L16.2025 20.2373L15.9408 24.1474C16.3242 24.1474 16.4933 23.9715 16.7083 23.764L18.5508 21.9724L22.3833 24.8032C23.09 25.1923 23.5975 24.9923 23.7733 24.149L26.2892 12.2924C26.5467 11.2599 25.895 10.7924 25.2208 11.0974Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1363_16252">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button type="button" className="info_whitepaper">
                Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

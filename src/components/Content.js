import React from "react";
import { useState } from "react";
import "./Content.css";

function Content() {
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [crossWalkNum, setCrossWalkNum] = useState(0);

  return (
    <div className="Content">
      <div className="Information">
        <text>남은 시간 &emsp; &emsp; &emsp; &nbsp;{time}분 </text>
        <br />
        <text>남은 거리 &emsp; &emsp; &emsp; &nbsp;{distance}m </text>
        <br />
        <text>남은 횡단보도 &emsp; &nbsp; &nbsp;{crossWalkNum}개 </text>
        <br />
      </div>

      <button className="ListenAgainBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="-8 -5 75 62"
        >
          <path
            d="M47.8017 26L45.8332 29.4821C47.6642 30.5172 49.9841 29.9574 51.1415 28.2012L47.8017 26ZM42.8304 12.0434L45.928 9.51265L45.928 9.51264L42.8304 12.0434ZM30.1735 4.42276L29.3897 8.34522V8.34522L30.1735 4.42276ZM15.5769 6.59776L13.6846 3.07363V3.07363L15.5769 6.59776ZM5.66711 17.581L1.96915 16.0561L1.96915 16.0561L5.66711 17.581ZM13.7334 44.2923L11.5042 47.6135H11.5042L13.7334 44.2923ZM28.0475 47.894L28.4413 51.8746L28.0475 47.894ZM44.2219 44.3784C45.7804 42.8127 45.7747 40.2801 44.2091 38.7215C42.6435 37.163 40.1108 37.1687 38.5522 38.7343L44.2219 44.3784ZM34.8776 14.0989C32.9545 13.0117 30.5142 13.6894 29.427 15.6125C28.3398 17.5356 29.0175 19.9759 30.9406 21.0631L34.8776 14.0989ZM60.3399 14.2446C61.5556 12.4 61.0458 9.91918 59.2012 8.7035C57.3566 7.48781 54.8758 7.99761 53.6601 9.84217L60.3399 14.2446ZM51.8017 26C51.8017 19.9897 49.7272 14.1628 45.928 9.51265L39.7327 14.5741C42.3624 17.7928 43.8017 21.8307 43.8017 26H51.8017ZM45.928 9.51264C42.1286 4.86208 36.8386 1.67546 30.9572 0.500293L29.3897 8.34522C33.4474 9.156 37.1034 11.3557 39.7327 14.5741L45.928 9.51264ZM30.9572 0.500293C25.0757 -0.674911 18.9711 0.235157 13.6846 3.07363L17.4691 10.1219C21.1197 8.16174 25.3322 7.53448 29.3897 8.34522L30.9572 0.500293ZM13.6846 3.07363C8.39853 5.9119 4.25969 10.5013 1.96915 16.0561L9.36506 19.1058C10.9525 15.256 13.818 12.0823 17.4691 10.1219L13.6846 3.07363ZM1.96915 16.0561C-0.321252 21.6107 -0.623315 27.7901 1.11383 33.5426L8.77226 31.2299C7.56774 27.2412 7.77745 22.956 9.36506 19.1058L1.96915 16.0561ZM1.11383 33.5426C2.85106 39.2954 6.52148 44.2691 11.5042 47.6135L15.9626 40.9711C12.5194 38.66 9.9767 35.2184 8.77226 31.2299L1.11383 33.5426ZM11.5042 47.6135C16.4872 50.9582 22.4731 52.4651 28.4413 51.8746L27.6537 43.9135C23.5369 44.3208 19.4054 43.2819 15.9626 40.9711L11.5042 47.6135ZM28.4413 51.8746C34.4094 51.2841 39.986 48.6334 44.2219 44.3784L38.5522 38.7343C35.6225 41.6773 31.7705 43.5062 27.6537 43.9135L28.4413 51.8746ZM49.7701 22.5179L34.8776 14.0989L30.9406 21.0631L45.8332 29.4821L49.7701 22.5179ZM51.1415 28.2012L60.3399 14.2446L53.6601 9.84217L44.4618 23.7988L51.1415 28.2012Z"
            fill="#E1FF68"
          />
        </svg>
      </button>
      <button className="PauseBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="-20 0 70 50"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 47.7097C0 49.9188 1.79086 51.7097 4 51.7097C6.20914 51.7097 8 49.9188 8 47.7097V4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4V47.7097ZM22.729 47.7097C22.729 49.9188 24.5199 51.7097 26.729 51.7097C28.9382 51.7097 30.729 49.9188 30.729 47.7097V4C30.729 1.79086 28.9382 0 26.729 0C24.5199 0 22.729 1.79086 22.729 4V47.7097Z"
            fill="#E1FF68"
          />
        </svg>
      </button>
      <button className="ObstacleReportBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="-9 -9 86 77"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 0C18.7909 0 17 1.79086 17 4C17 4.29917 17.0328 4.59067 17.0951 4.87109H4C1.79086 4.87109 0 6.66195 0 8.87109V52.5808C0 54.7899 1.79086 56.5808 4 56.5808H61.6968C63.9059 56.5808 65.6968 54.7899 65.6968 52.5808V8.87109C65.6968 6.66195 63.9059 4.87109 61.6968 4.87109H48.5081C48.5704 4.59067 48.6032 4.29917 48.6032 4C48.6032 1.79086 46.8124 0 44.6032 0H21ZM8 12.8711V48.5808H57.6968V12.8711H8ZM32.8484 36.713C36.155 36.713 38.8355 34.0325 38.8355 30.7259C38.8355 27.4193 36.155 24.7388 32.8484 24.7388C29.5418 24.7388 26.8613 27.4193 26.8613 30.7259C26.8613 34.0325 29.5418 36.713 32.8484 36.713ZM32.8484 44.713C40.5732 44.713 46.8355 38.4508 46.8355 30.7259C46.8355 23.0011 40.5732 16.7388 32.8484 16.7388C25.1235 16.7388 18.8613 23.0011 18.8613 30.7259C18.8613 38.4508 25.1235 44.713 32.8484 44.713Z"
            fill="#E1FF68"
          />
        </svg>
      </button>
      <div className="ExplainBtnText">
        <text className="ListenAgain">다시 듣기</text>
        <text className="Pause">안내 종료</text>
        <text className="ObstacleReport">장애물 신고</text>
      </div>
    </div>
  );
}

export default Content;
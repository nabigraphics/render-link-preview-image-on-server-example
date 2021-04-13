import { PostData } from "config/mockDbData";
import convertImageToDataURI from "utils/convertImageToDataURI";

const generateSvgWithPost = async (post: PostData) => {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g clip-path="url(#clip0)">
  <rect width="1200" height="630" fill="white"/>
  <g filter="url(#filter0_dddd)">
  <rect x="48" y="48" width="1104" height="534" rx="20" fill="white"/>
  <rect x="52" y="52" width="1096" height="526" rx="16" stroke="#5F45FF" stroke-width="8"/>
  </g>
  <text shape-inside="circle(100 at 100 100)" fill="black" xml:space="preserve" style="white-space: pre-wrap;" font-family="IBM Plex Sans KR" font-size="64" font-weight="600" letter-spacing="0em"><tspan x="114" y="263.44">${
    post.title
  }</tspan></text>
  <g filter="url(#filter1_dddd)">
  <circle cx="142" cy="494" r="28" fill="url(#pattern0)"/>
  <circle cx="142" cy="494" r="27" stroke="black" stroke-width="2"/>
  </g>
  <text fill="black" fill-opacity="0.68" xml:space="preserve" style="white-space: pre" font-family="IBM Plex Sans KR" font-size="18" font-weight="500" letter-spacing="0em"><tspan x="182.451" y="486.53">${
    post.profile_name
  }</tspan></text>
  <text fill="black" xml:space="preserve" style="white-space: pre" font-family="IBM Plex Sans KR" font-size="18" font-weight="500" letter-spacing="0em"><tspan x="182.451" y="513.53">@${
    post.username
  }</tspan></text>
  </g>
  <defs>
  <filter id="filter0_dddd" x="-39" y="-25" width="1278" height="708" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="0.634032"/>
  <feGaussianBlur stdDeviation="1.97003"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0266818 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="1.75302"/>
  <feGaussianBlur stdDeviation="5.44688"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0305453 0"/>
  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="4.22059"/>
  <feGaussianBlur stdDeviation="13.114"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0363605 0"/>
  <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="14"/>
  <feGaussianBlur stdDeviation="43.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
  <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape"/>
  </filter>
  <filter id="filter1_dddd" x="27" y="393" width="230" height="230" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="0.634032"/>
  <feGaussianBlur stdDeviation="1.97003"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0266818 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="1.75302"/>
  <feGaussianBlur stdDeviation="5.44688"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0305453 0"/>
  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="4.22059"/>
  <feGaussianBlur stdDeviation="13.114"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0363605 0"/>
  <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="14"/>
  <feGaussianBlur stdDeviation="43.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
  <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape"/>
  </filter>
  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  <use xlink:href="#image0" transform="scale(0.00217391)"/>
  </pattern>
  <clipPath id="clip0">
  <rect width="1200" height="630" fill="white"/>
  </clipPath>
  <image id="image0" width="460" height="460" xlink:href="${await convertImageToDataURI(
    post.profile_image_url
  )}" />
  </defs>
  </svg>`;
};

export default generateSvgWithPost;

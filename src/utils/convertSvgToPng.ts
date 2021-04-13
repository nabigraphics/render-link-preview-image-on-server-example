import sharp from "sharp";

const convertSvgToPng = async (svg: string) => {
  return await sharp(Buffer.from(svg)).png().toBuffer();
};
export default convertSvgToPng;

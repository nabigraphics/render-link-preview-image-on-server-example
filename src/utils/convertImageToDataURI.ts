import axios from "axios";

const convertImageToDataURI = async (imageUrl: string) => {
  try {
    const { data, headers } = await axios.get(`${imageUrl}`, {
      responseType: "arraybuffer",
    });
    return `data:${headers["content-type"]};base64,${Buffer.from(
      data,
      "binary"
    ).toString("base64")}`;
  } catch (error) {
    return "";
  }
};

export default convertImageToDataURI;

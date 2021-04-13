import { Router } from "express";

import mock from "config/mockDbData";
import generateSvgWithPost from "utils/generateSvgWithPost";
import convertSvgToPng from "utils/convertSvgToPng";

interface ThumbnailParams {
  post_id: string;
}

const router = Router();
const getPostDataWithPostId = (postId: string) => {
  if (mock[postId]) {
    return mock[postId];
  } else {
    throw new Error(`${postId} is not exist in DB`);
  }
};

router.get<ThumbnailParams>(`/:post_id`, async (req, res) => {
  const { post_id } = req.params;
  const { svg } = req.query;

  try {
    const postData = getPostDataWithPostId(post_id);
    if (svg && svg === "1") {
      // SVG로 응답
      const svgImage = await generateSvgWithPost(postData);
      res.setHeader("Content-Type", "image/svg+xml");
      res.send(svgImage);
    } else {
      // Sharp를 사용하여 png로 만든 후 응답
      const svgImage = await generateSvgWithPost(postData);
      const convertedImage = await convertSvgToPng(svgImage);
      res.setHeader("Content-Type", "image/png");
      res.send(convertedImage);
    }
  } catch (error) {
    console.error(error);
    res.status(404).send("404 Not Found");
  }
});

export default router;

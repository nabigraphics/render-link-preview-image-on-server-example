import Express from "express";
import thumbnailsRouter from "./thumbnails";

const router = Express.Router();

router.use(`/thumbnails`, thumbnailsRouter);

export default router;

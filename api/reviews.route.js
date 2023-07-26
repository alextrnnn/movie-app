import express from "express"
import ReviewsCTRL from "./reviews.controller.js"
const router = express.Router()

router.route("/movie/:id").get(ReviewsCTRL.apiGetReviews)
routers.route("/new").post(ReviewsCTRL.apiPostReview)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCTRL.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)


export default router
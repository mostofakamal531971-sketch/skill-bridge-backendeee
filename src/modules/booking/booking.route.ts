
import { Router } from "express";
import { authMiddleware, roleMiddleware } from "../../middleware/auth-middlewares";
import { validateRequest } from "../../middleware/validateRequest";
import { bookingSchemas } from "./booking.schema";
import { bookingControllers } from "./booking.controller";
import { UserRole } from "../../generated/prisma/enums";

const router:Router = Router();


router.post("/",authMiddleware,roleMiddleware([UserRole.STUDENT]),validateRequest(bookingSchemas.bookingCreateSchema),bookingControllers.createBooking)
router.get("/",authMiddleware,roleMiddleware([UserRole.STUDENT]),bookingControllers.getAllBookings)
router.get("/:id",authMiddleware,roleMiddleware([UserRole.STUDENT]),bookingControllers.getBookingsDeatils)
router.patch("/:id/cancel-booking",authMiddleware,roleMiddleware([UserRole.STUDENT]),bookingControllers.cancelBooking)



export default router;

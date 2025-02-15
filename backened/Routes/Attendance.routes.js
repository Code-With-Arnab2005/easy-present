import {Router} from 'express';
import { attendaceHandler } from '../Controllers/attendance.controllers.js';
import { getTodaysAttendances } from '../Controllers/ShowTodaysAttendance.controllers.js';

const router = Router();

router.route("/attendance").post(attendaceHandler);
router.route("/todays-attendance").get(getTodaysAttendances);

export default router;
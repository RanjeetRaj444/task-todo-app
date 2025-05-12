import { Router } from 'express';
import { getAllTasks } from '../controllers/taskController';

const router = Router();

router.get('/allTasks', getAllTasks);

export default router;
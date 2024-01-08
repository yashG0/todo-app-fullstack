import {Router} from 'express';
import { getTodo , saveTodo} from '../controllers/TodoController.js';

const router = Router();

router.get('/',getTodo)
router.post('/save',saveTodo)

export { router };

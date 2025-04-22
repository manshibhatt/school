import express from 'express';
import { listSchools } from './controllers/listSchools.controller.js';
import { addSchool } from './controllers/addSchool.controller.js';

const router = express.Router();

router.post('/addSchool', addSchool);
router.get('/listSchools', listSchools); 

export default router;

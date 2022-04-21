import { Router } from "express";

import { projectsGet, projectsPost } from "../controllers/projects.controllers.js";

const router = Router();

router.get('/projects', projectsGet)
router.post('/projects', projectsPost)
router.put('/projects/:id')
router.delete('/projects/:id')
router.get('/projects/:id')

export default router
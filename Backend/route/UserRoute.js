import express from "express"
import { Signup,Login } from "../controller/UserController.js"
let router = express.Router()

router.post('/Signup',Signup)
router.post('/Login',Login)
export default router
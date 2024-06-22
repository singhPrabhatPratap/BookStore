import express from 'express'
import { getBook,getSearchedData } from '../controller/BookController.js'
let router = express.Router()
router.get('/',getBook)
router.get('/search',getSearchedData)
export default router
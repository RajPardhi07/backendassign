import express from 'express'
import { deleteMemberController, filterMemberController, getMemberController, getSingleMemberController, memberController } from '../controllers/memberController.js';
// import formidable from "express-formidable";

const router = express.Router()



// http://localhost:3000/api/member/create
router.post('/create', memberController);


// http://localhost:3000/api/member/get-member
router.get('/get-member', getMemberController);

// http://localhost:3000/api/member/get-member/:id
router.get('/get-member/:id', getSingleMemberController);


// http://localhost:3000/api/member/filter-member
router.get('/filter-member', filterMemberController);



// http://localhost:3000/api/member/delete-member
router.delete('/delete-member/:id', deleteMemberController);



export default router;
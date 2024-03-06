import Router from 'express';
import {getUsers,createUser,updateUser,deleteUser} from '../controllers/user_controller.js';
const userRouter = Router()

 userRouter.get('/',getUsers);  
 userRouter.post('/create',createUser);  
 userRouter.put('/:id',updateUser);  
 userRouter.delete('/:id',deleteUser);  

export default userRouter;
import {sequelize} from '../database/config.js';
import {User} from '../models/users_models.js';


export async function getUsers(req, res){
    const users = await User.FindAll()

    res.status(200)
    res.end(users)

}
export async function createUser(req, res){
    const {name, email} = req.body;
    
    if(!name || !email){
        console.log('Missing params')
        res.status(404).json({"message": "params not found"})
    }
    if(typeof name != 'string' || typeof email != 'string'){
        console.log('wrong datatype')
        res.status(404).json({"message": "params not matching with types"})
    }
    const newUser = await User.create({
        name,
        email
    })
    newUser.save();
    return res.status(200).json({"created": (newUser)})

}

export async function updateUser(req, res){
    const userID = req.params.id;
    const {name, email} = req.body;

    if(!name || !email){
        console.log('Missing params')
        res.status(404).json({"message": "params not found"})
    }
    if(typeof name != 'string' || typeof email != 'string'){
        console.log('wrong datatype')
        res.status(404).json({"message": "params not matching with types"})
    }
    
    try {
        await User.update({ name, email }, {
            where: {
              id: userID
            }
          });
        
    } catch (error) {
        return res.status(500).json({error:error})
    }


    
}


export async  function deleteUser (req,res){
    const id = req.params.id;

            try{
                if(!id){
                  await  res.status(404).json({message: 'not found'});
                }
                
                await   User.detroy({where:id})
                res.status(203).json('perfect deleted');
            }catch(error){
                return res.status(500).json({error:error})
            }
    
}
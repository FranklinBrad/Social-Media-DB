const router = require('express').Router();
const User = require('../../db/users');

router.get('/', async (req, res) => {
   try{
    const payload = await User.findAll();
    res.status(201).json({status: ('succes'), payload})
   } catch (err){
    res.status(401).json({status: ('error'), payload: err.message})

   }
} )

router.get('/:id', async (req, res) => {
    try{
     const payload = await User.findAll(req.params.id);
     res.status(201).json({status: ('succes'), payload})
    } catch (err){
     res.status(401).json({status: ('error'), payload: err.message})
 
    }
 } )

 router.post('/', async (req, res) => {
    try{
     const payload = await User.create(req.body);
     res.status(201).json({status: ('succes'), payload})
    } catch (err){
     res.status(401).json({status: ('error'), payload: err.message})
 
    }
 } )

 router.put('/:id', async (req, res) => {
    try{
     const payload = await User.update(
        req.body, {
          where: {
           id: req.params.id
          }
        }
     );
     res.status(201).json({status: ('succes'), payload})
    } catch (err){
     res.status(401).json({status: ('error'), payload: err.message})
 
    }
 } )

 router.delete('/;id', async (req, res) => {
    try{
     const payload = await User.destroy({
        where: {
            id:req.params.id

        }
    });
     res.status(201).json({status: ('succes'), payload})
    } catch (err){
     res.status(401).json({status: ('error'), payload: err.message})
 
    }
 } )

 modual.exports = router
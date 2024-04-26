export const uploads = (req,res)=>{
    res.json({
        url:`/uploads/${req.file.originalname}`,
    })
}
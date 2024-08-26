export const uploads = (req,res)=>{
    const file = req.files[0];
  res.json({
    url: `/uploads/${file.originalname}`,
  });
}
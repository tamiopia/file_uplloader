import Express  from "express";
import cors from 'cors';
import fileRoutes from './routes/fileRoutes';
 const app=Express();

 const port=5000;
  app.get('/',(req,res)=>{
    res.send('hello world')

  })
  app.listen(port,()=>{
    console.log(`connected sucssefuly on ${port}`)
  })

  app.use(Express.json());
app.use(cors());

app.use('/api/files', fileRoutes);
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'Backend is connected!' });
});

// Only use these in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../frontend/build')));
    
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
    });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
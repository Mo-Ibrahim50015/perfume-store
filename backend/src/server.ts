import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import healthRouter from './routes/health';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_PREFIX = process.env.API_PREFIX || '/api/v1';

// Security Middlewares
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
  })
);

// Logging
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),
  max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
  message: {
    success: false,
    error: {
      message: 'تم تجاوز الحد المسموح من الطلبات، يرجى المحاولة لاحقاً بعد دقيقة.',
    },
  },
});
app.use(API_PREFIX, limiter);

// Body Parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Base Welcome Route
app.get('/', (_req, res) => {
  res.json({
    name: 'متجر العطور - API',
    version: '1.0.0',
    documentation: '/docs',
    health: `${API_PREFIX}/health`,
  });
});

// API Routes
app.use(`${API_PREFIX}/health`, healthRouter);

// 404 Handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: 'نقطة النهاية المطلوبة غير موجودة (Endpoint not found)',
    },
  });
});

// Centralized Error Handler
app.use(errorHandler);

// Start Server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`🌸 خادم متجر العطور يعمل بنجاح`);
    console.log(`📍 العنوان: http://localhost:${PORT}`);
    console.log(`🩺 فحص الصحة: http://localhost:${PORT}${API_PREFIX}/health`);
    console.log(`===============================================`);
  });
}

export default app;

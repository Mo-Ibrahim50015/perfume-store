import { Router, Request, Response } from 'express';
import { dbPool } from '../config/database';
import { redisClient } from '../config/redis';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  let dbStatus = 'disconnected';
  let redisStatus = 'disconnected';

  // Check Database
  try {
    const dbRes = await dbPool.query('SELECT 1');
    if (dbRes.rowCount) {
      dbStatus = 'connected';
    }
  } catch (err: any) {
    dbStatus = `error: ${err.message}`;
  }

  // Check Redis
  try {
    if (redisClient.status === 'ready' || redisClient.status === 'connect') {
      const pong = await redisClient.ping();
      if (pong === 'PONG') {
        redisStatus = 'connected';
      }
    } else {
      redisStatus = redisClient.status;
    }
  } catch (err: any) {
    redisStatus = `error: ${err.message}`;
  }

  const isHealthy = dbStatus === 'connected';

  res.status(isHealthy ? 200 : 503).json({
    status: isHealthy ? 'healthy' : 'degraded',
    timestamp: new Date().toISOString(),
    services: {
      database: dbStatus,
      redis: redisStatus,
    },
    uptime: process.uptime(),
  });
});

export default router;

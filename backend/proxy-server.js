const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api/auth',
  (req, res, next) => {
    console.log('Proxying /api/auth');
    next();
  },
  createProxyMiddleware({
    target: 'http://localhost:5003/api/auth',
    changeOrigin: true,
  }),
);

app.use(
  '/api/quiz',
  createProxyMiddleware({
    target: 'http://localhost:5000/api/quiz',
    changeOrigin: true,
  }),
);

app.use(
  '/api/tag',
  createProxyMiddleware({
    target: 'http://localhost:5000/api/tag',
    changeOrigin: true,
  }),
);

app.use(
  '/api/session',
  (req, res, next) => {
    console.log('Proxying /api/session');
    next();
  },
  createProxyMiddleware({
    target: 'http://localhost:5000/api/session',
    changeOrigin: true,
  }),
);

app.use(
  '/api/category',
  createProxyMiddleware({
    target: 'http://localhost:5000/api/category',
    changeOrigin: true,
  }),
);

app.use(
  '/api/question',
  createProxyMiddleware({
    target: 'http://localhost:5000/api/question',
    changeOrigin: true,
  }),
);

app.use(
  '/api/stats',
  createProxyMiddleware({
    target: 'http://localhost:5001/api/stats',
    changeOrigin: true,
  }),
);

app.use(
  '/api/user',
  createProxyMiddleware({
    target: 'http://localhost:5002/api/user',
    changeOrigin: true,
  }),
);

app.use(
  '/api/admin',
  createProxyMiddleware({
    target: 'http://localhost:5002/api/admin',
    changeOrigin: true,
  }),
);

app.use(
  '/api/password',
  createProxyMiddleware({
    target: 'http://localhost:5002/api/password',
    changeOrigin: true,
  }),
);

app.use((err, req, res) => {
  console.error('Proxy error:', err);
  res.status(502).json({ message: 'Proxy error', error: err.message });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});

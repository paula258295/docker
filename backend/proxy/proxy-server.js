const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api/auth',
  createProxyMiddleware({
    target: 'http://auth-service:5003/api/auth',
    changeOrigin: true,
    pathRewrite: { '^/api/auth': '' },
  }),
);

app.use(
  '/api/quiz',
  createProxyMiddleware({
    target: 'http://quiz-service:5000/api/quiz',
    changeOrigin: true,
    pathRewrite: { '^/api/quiz': '' },
  }),
);

app.use(
  '/api/tag',
  createProxyMiddleware({
    target: 'http://quiz-service:5000/api/tag',
    changeOrigin: true,
    pathRewrite: { '^/api/tag': '' },
  }),
);

app.use(
  '/api/session',
  createProxyMiddleware({
    target: 'http://quiz-service:5000/api/session',
    changeOrigin: true,
    pathRewrite: { '^/api/session': '' },
  }),
);

app.use(
  '/api/category',
  createProxyMiddleware({
    target: 'http://quiz-service:5000/api/category',
    changeOrigin: true,
    pathRewrite: { '^/api/category': '' },
  }),
);

app.use(
  '/api/question',
  createProxyMiddleware({
    target: 'http://quiz-service:5000/api/question',
    changeOrigin: true,
    pathRewrite: { '^/api/question': '' },
  }),
);

app.use(
  '/api/stats',
  createProxyMiddleware({
    target: 'http://stats-service:5001/api/stats',
    changeOrigin: true,
    pathRewrite: { '^/api/stats': '' },
  }),
);

app.use(
  '/api/user',
  createProxyMiddleware({
    target: 'http://user-service:5002/api/user',
    changeOrigin: true,
    pathRewrite: { '^/api/user': '' },
  }),
);

app.use(
  '/api/admin',
  createProxyMiddleware({
    target: 'http://user-service:5002/api/admin',
    changeOrigin: true,
    pathRewrite: { '^/api/admin': '' },
  }),
);

app.use(
  '/api/password',
  createProxyMiddleware({
    target: 'http://user-service:5002/api/password',
    changeOrigin: true,
    pathRewrite: { '^/api/password': '' },
  }),
);

app.use((err, req, res, next) => {
  console.error('Proxy error:', err);
  res.status(502).json({ message: 'Proxy error', error: err.message });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
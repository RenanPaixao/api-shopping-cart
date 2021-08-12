import app from './app';

const PORT: string | number = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
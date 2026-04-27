import "dotenv/config";
import { createApp } from "./app.js";
import { connectDatabase } from "./config/db.js";

const port = Number(process.env.PORT || 5000);

async function bootstrap() {
  await connectDatabase();
  const app = createApp();

  app.listen(port, () => {
    console.log(`Saree Studio API running on http://localhost:${port}`);
  });
}

bootstrap().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});

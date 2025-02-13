import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    app: {
      port: process.env.PORT,
    },
  };
});

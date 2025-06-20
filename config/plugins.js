module.exports = {
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true, // 👈 вот это главное
      defaultLimit: 10,
      maxLimit: 100,
      apolloServer: {
        introspection: true,  // 👈 это тоже важно для продакшена
      },
    },
  },
  // email: {
  //   config: {
  //     provider: 'nodemailer',
  //     providerOptions: {
  //       host: process.env.SMTP_HOST,
  //       port: process.env.SMTP_PORT,
  //       auth: {
  //         user: process.env.SMTP_USER,
  //         pass: process.env.SMTP_PASS,
  //       },
  //       // optional, если требуется TLS
  //       secure: false,
  //     },
  //     settings: {
  //       defaultFrom: 'your@email.com',
  //       defaultReplyTo: 'your@email.com',
  //     },
  //   },
  // },
  // i18n: {
  //   enabled: true,
  //   config: {
  //     defaultLocale: 'en',
  //     locales: ['en', 'fr', 'ru', 'he'],
  //   },
  // },
};


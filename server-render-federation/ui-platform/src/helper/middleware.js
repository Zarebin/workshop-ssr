export default async (express, app, done, store) => {

  const renderer = (await import("./renderer")).default;
  app.get("/*", (req, res) => renderer(req, res, store));

  done();
};

const validateBody = (schema) => {
  const func = (req, _, next) => {
    console.log("backend req.body", req.body);
    console.log("schema.validate(req.body)", schema.validate(req.body));

    const { error } = schema.validate(req.body);
    if (error) {
      const error = new Error("Body isn't valid");
      error.status = 400;
      return next(error);
    }
    next();
  };

  return func;
};

export default validateBody;

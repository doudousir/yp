export default (req, res, next) => {
    if (!req.session || !req.session.user) {
        return res.status(401).send({
          status: false
        });
      }
    return next();
}


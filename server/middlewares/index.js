const { verify } = require("../authentication/utils");

async function checkAuthHeaderSetUser(req, res, next) {
  const authorization = req.get("Authorization");
  if (authorization) {
    const token = authorization.split(" ")[1];
    try {
      const user = await verify(token);
      req.user = user;
    } catch (error) {
      console.error("index.js Middleware: checkAuthHeaderSetUser - ", error);
    }
  }
  next();
}

// async function checkAuthHeaderSetUserUnAuthorized(req, res, next) {
//   const authorization = req.get("authorization");
//   if (authorization) {
//     const token = authorization.split(" ")[1];
//     try {
//       const user = await verify(token);
//       req.user = user;
//       return next();
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   res.status(401);
//   next(new Error("Un-Authorized"));
// }

function isAdmin(req, res, next) {
  if (req.user && req.user.role_id === 1) {
    return next();
  }
  res.status(401);
  next(new Error("Un-Authorized"));
}

function notFound(req, res, next) {
  const error = new Error("(index.js Middleware) Not Found - " + req.originalUrl);
  res.status(404);
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
    error: process.env.NODE_ENV === "production" ? {} : error.stack,
  });
}

module.exports = {
  notFound,
  errorHandler,
  checkAuthHeaderSetUser,
  // checkAuthHeaderSetUserUnAuthorized,
  // isAdmin,
};

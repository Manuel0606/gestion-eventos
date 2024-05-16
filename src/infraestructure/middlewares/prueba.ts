import { NextFunction, Request, Response } from "express";

function pruebaMiddleware(req: Request, _res: Response, next: NextFunction) {
  console.log('Middleware de prueba');
  req.body = 'Información de la petición';
  next();
}

export default pruebaMiddleware;
import { RequestHandler, Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";

export function validate(schema: ZodObject<any>): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): any {
    const validatedData = schema.parse(req.body);
    req.body = validatedData;
    next();
  };
}

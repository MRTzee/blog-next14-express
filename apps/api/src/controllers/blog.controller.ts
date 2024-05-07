import { createBlogService } from '@/services/blog/create-blog.service';
import { Request, Response } from 'express';

export class BlogController {
  async createBlogController(req: Request, res: Response) {
    const files = req.files as Express.Multer.File[];

    if (!files?.length) {
      throw new Error('no file uploaded');
    }
    const result = await createBlogService(req.body, files[0]);

    return res.status(200).send(result);
  }
}

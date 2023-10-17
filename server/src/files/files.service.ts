import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as path from "path";
import * as fs from "fs";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
    async createFile(file: any): Promise<string> {
        try {
            const ext = file.originalname.split(".").at(-1)
            const filename = uuidv4() + `.${ext}`;
            const filePath = path.resolve(__dirname, "..", "static");
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }
            fs.writeFileSync(path.join(filePath, filename), file.buffer);
            return filename;
        } catch (err) {
            console.log(err)
            throw new HttpException("An error happened while processing the image", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}

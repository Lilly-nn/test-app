import { PipeTransform, ArgumentMetadata, Injectable, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from "class-validator";

@Injectable()
export class ValidationPipe implements PipeTransform {

    transform(value: unknown, metadata: ArgumentMetadata) {
        const obj = plainToInstance(metadata.metatype, value);
        const errors = validate(obj);
    }
}

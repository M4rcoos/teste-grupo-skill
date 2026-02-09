import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { GqlArgumentsHost } from '@nestjs/graphql';
import { DomainError } from '../../domain/errors/domain-error';
import { InvalidOrderIdError } from '../../domain/errors/invalid-order-id.error';
import { OrderNotFoundError } from '../../domain/errors/order-not-found.error';
import { ZodError, ZodIssue } from 'zod';

@Catch(DomainError, ZodError)
export class GqlDomainExceptionFilter implements ExceptionFilter<
    DomainError | ZodError<ZodIssue>
> {
    catch(exception: DomainError | ZodError<ZodIssue>, host: ArgumentsHost) {
        GqlArgumentsHost.create(host);

        // Erros de domínio
        if (exception instanceof OrderNotFoundError) {
            throw new Error(`Order not found: ${exception.message}`);
        }

        if (exception instanceof InvalidOrderIdError) {
            throw new Error(`Invalid order ID: ${exception.message}`);
        }
        // Erros do zod
        if (exception instanceof ZodError) {
            const messages = exception.issues.map((err) => ({
                path: err.path.join('.'),
                message: err.message,
            }));
            throw new Error(`Validation error: ${JSON.stringify(messages)}`);
        }

        throw new Error(exception.message);
    }
}

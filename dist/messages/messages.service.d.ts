import { MessagesRepository } from './messages.repository';
export declare class MessagesService {
    messagesRepo: MessagesRepository;
    constructor();
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(message: string): Promise<string>;
    deleteMessages(id: string): Promise<any>;
}

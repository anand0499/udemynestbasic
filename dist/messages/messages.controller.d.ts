import { CreateMessagesDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    listMessages(): Promise<any>;
    createMessage(body: CreateMessagesDto): Promise<string>;
    getMessages(id: any): Promise<any>;
    deletemsg(id: any): Promise<any>;
}

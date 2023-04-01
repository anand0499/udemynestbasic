export declare class MessagesRepository {
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<string>;
    deleteMessage(id: string): Promise<any>;
}

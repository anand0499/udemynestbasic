import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
    // OneWay
    messagesRepo:MessagesRepository;
    constructor(){
        // Service creates its own Dependencies
        //DONT do this on real apps
        this.messagesRepo=new MessagesRepository();
    }

    //Alternate way (do this on real apps)
    // constructor(private readonly messagesrepo:MessagesRepository){}

    async findOne(id:string){
        return await this.messagesRepo.findOne(id);
    }

    async findAll(){
        return await this.messagesRepo.findAll();
    }

    async create(message:string){
        return await this.messagesRepo.create(message);
    }

    async deleteMessages(id:string){
        return await this.messagesRepo.deleteMessage(id);
    }

}

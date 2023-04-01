import { Controller, Get, Post,Body,Param,NotFoundException, Delete } from '@nestjs/common';
import { CreateMessagesDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    //Dependency Injection 
    constructor(private readonly messagesService:MessagesService ){}
    // messagesService:MessagesService;
    // constructor(){
    //     this.messagesService=new MessagesService();
    // }

    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }


    @Post()
    createMessage(@Body() body:CreateMessagesDto){
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessages(@Param('id') id:any){
        const message=await this.messagesService.findOne(id);

        if(!message){
            throw new NotFoundException('message not found')
        }

        return message;
    }

    @Delete('/:id')
    async deletemsg(@Param('id') id:any){
        const message=await this.messagesService.deleteMessages(id);
        if(!message){
            throw new NotFoundException('message not found')
        }
        return message;
    }

}

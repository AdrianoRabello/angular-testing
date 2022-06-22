import { Comment } from './comment';
import { Post } from './post';



export class PostWithComments{

    constructor(public post:Post,public comment:Comment){
        
    }
}
import {Post} from "../model/post";
import {Photo} from "../model/photo";

class PostService {
    async GetListPost(): Promise<Post[]> {
        let result = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (result.ok) {
            return result.json();
        }
    }

    async GetListPhoto(): Promise<Photo[]> {
        let result = await fetch('https://jsonplaceholder.typicode.com/photos');

        if (result.ok) {
            return result.json();
        }
    }

    async ViewDetail(id: number): Promise<Post> {
        let result = await fetch(`/post/getDetail/${id}`);

        if (result.ok) {
            return result.json();
        }
    }
}

const PostServiceInstance = new PostService();

export {PostServiceInstance}
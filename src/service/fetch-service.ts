import {Post} from "../model/post";
import {Photo} from "../model/photo";
import {Book} from "../model/book";
import {BookDetail} from "../model/book-detail";

class FetchDataService {
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

    async SearchBook(query: string, maxResult: number = 10): Promise<Book[]> {
        let result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResult}`);
        let bookData = null;
        if (result.ok) {
            await result.json().then(data => {
                bookData = data['items'];
            });

            return bookData;
        }
    }

    async BookDetail(): Promise<BookDetail> {

        let requestData = {
            "url": "/manga/getBookDetail/6348",
            "data": {},
            "method": "GET",
            "api": "/mangaheatapi/web"
        };


        let formBody: any = [];
        for (var property in requestData) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(requestData[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");

        let result = await fetch('http://www.zingbox.me/api',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody,
            });

        if (result.ok) {
            alert(222);
            return await result.json();
        }
    }
}

const FetchDataServiceInstance = new FetchDataService();

export {FetchDataServiceInstance}
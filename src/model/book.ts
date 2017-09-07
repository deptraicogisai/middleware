// export interface Book {
//     items: Item[]
// }

export interface Book {
    volumeInfo: BookInfo
}

interface BookInfo {
    title: string,
    subtitle: string,
    authors: string[],
    publisher: string,
    description: string,
    infoLink: string,
    imageLinks: ImageInfo
}

interface ImageInfo {
    smallThumbnail: string,
    thumbnail: string
}
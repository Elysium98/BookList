export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    author: string;
    publisher: string;
    publisherDate: string;
  },
  ratingStar: number;
}


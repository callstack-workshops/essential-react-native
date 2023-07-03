type Image = {
  mobile: string;
  default: string;
  backkrop: string;
};

export type Show = {
  id: number;
  images: Image;
  name: string;
  overview: string;
  voteAverage: number;
  year: number;
};

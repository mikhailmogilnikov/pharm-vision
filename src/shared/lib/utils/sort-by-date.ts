type TElement = {
  date: string;
  [key: string]: any;
};

export const sortByDate = () => (a: TElement, b: TElement) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

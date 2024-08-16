type TElement = {
  date: string;
  [key: string]: any;
};

export const sortByDate = () => (a: TElement, b: TElement) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const sortByDateStr = () => (a: string, b: string) =>
  new Date(b).getTime() - new Date(a).getTime();

export interface StoryTypes {
  id: number;
  url: string;
  title: string;
  by: string;
  time: number;
}
export interface StoryProps {
  story: StoryTypes;
  i: Number;
}
export interface HomeTypes {
  stories: Array<number>;
}

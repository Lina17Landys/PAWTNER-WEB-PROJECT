export interface Option {
  text: string;
  value: 'cat' | 'dog' | 'neutral';
  image?: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}
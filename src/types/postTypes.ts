export interface Post {
  id: string;
  title: string;
  description: string;
  symptoms: string[];
  animalType: 'dog' | 'cat';
  petName: string;
  priority: 'low' | 'medium' | 'high' | 'emergency';
  photoUrl?: string;
  photo?: File;
  gptRecommendation?: string | null;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  username: string;
  text: string;
  createdAt: string;
}

export interface PostData {
  title: string;
  description: string;
  symptoms: string[];
  animalType: "dog" | "cat";
  petName: string;
  priority: 'low' | 'medium' | 'high' | 'emergency';
  photo?: File;
  gptRecommendation?: string | null;
}
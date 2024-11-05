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
  iaRecommendation?: string | null;
  comments?: Comment[];
  userId: string;
  username: string;   
}

export interface Comment {
  id: string;
  userId: string;
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
  iaRecommendation?: string | null;
}
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
}

export interface PostData {
  title: string;
  description: string;
  symptoms: string[];
  animalType: 'dog' | 'cat' | null;
  petName: string;
  priority: string;
  photo?: File;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  symptoms: string[];
  animalType: 'dog' | 'cat';
  petName: string;
  priority: 'Low' | 'Medium' | 'High' | 'Emergency';
  photoUrl?: string;
  photo?: File;
  gptRecommendation?: string;
}

export interface PostData {
  title: string;
  description: string;
  symptoms: string[];
  animalType: "dog" | "cat";
  petName: string;
  priority: string;
  photo?: File;
  gptRecommendation?: string | null;
}

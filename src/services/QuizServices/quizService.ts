import { Question } from '../../types/QuizTypes/quizTypes';
import Img1 from '../../assets/images/Quiz-illustration/img-1.png';
import Img2 from '../../assets/images/Quiz-illustration/img-2.png';
import Img3 from '../../assets/images/Quiz-illustration/img-3.png';
import Img4 from '../../assets/images/Quiz-illustration/img-4.png';
import Img5 from '../../assets/images/Quiz-illustration/img-5.png';
import Img6 from '../../assets/images/Quiz-illustration/img-6.png';
import Img7 from '../../assets/images/Quiz-illustration/img-7.png';
import Img8 from '../../assets/images/Quiz-illustration/Img-8.svg';
import Img9 from '../../assets/images/Quiz-illustration/img-9.png';
import Img10 from '../../assets/images/Quiz-illustration/img-10.png';
import Img11 from '../../assets/images/Quiz-illustration/img-11.png';
import Img12 from '../../assets/images/Quiz-illustration/img-12.png';

export const questions: Question[] = [
  {
    id: 1,
    text: "What type of living environment do you have?",
    options: [
      { text: "Apartment", value: "cat", image: Img1, characteristics: ["small", "calm"] },
      { text: "House with a yard", value: "dog", image: Img2, characteristics: ["medium", "active"] },
      { text: "Farm/Rural", value: "dog", image: Img3, characteristics: ["large", "very active"] },
    ],
  },
  {
    id: 2,
    text: "How much time can you dedicate to your pet daily?",
    options: [
      { text: "Less than 1 hour", value: "cat", characteristics: ["low energy"] },
      { text: "1-2 hours", value: "cat", characteristics: ["calm"] },
      { text: "2-4 hours", value: "dog", characteristics: ["active"] },
      { text: "4+ hours", value: "dog", characteristics: ["very active"] },
    ],
  },
  {
    id: 3,
    text: "What level of activity are you looking for in a pet?",
    options: [
      { text: "Low (Likes to relax and cuddle)", value: "cat", image: Img4 },
      { text: "Moderate (Enjoys playtime but also quiet moments)", value: "cat", image: Img5 },
      { text: "High (Needs lots of exercise and stimulation)", value: "dog", image: Img6 },
    ],
  },
  {
    id: 4,
    text: "Are you looking for a specific size of pet?",
    options: [
      { text: "Small", value: "cat" },
      { text: "Medium", value: "cat" },
      { text: "Large", value: "dog" },
      { text: "No preference", value: "neutral" },
    ],
  },
  {
    id: 5,
    text: "Do you have any other pets at home?",
    options: [
      { text: "No, this will be my only pet", value: "neutral", image: Img7 },
      { text: "Yes, I have other dogs", value: "dog", image: Img6 },
      { text: "Yes, I have cats", value: "cat", image: Img8 },
      { text: "Yes, I have other types of pets (e.g., birds, reptiles)", value: "neutral", image: Img9 },
    ],
  },
  {
    id: 6,
    text: "How do you feel about grooming and maintenance?",
    options: [
      { text: "I prefer a low-maintenance pet", value: "cat" },
      { text: "I don’t mind moderate grooming needs", value: "neutral" },
      { text: "I’m okay with high-maintenance grooming", value: "dog" },
    ],
  },
  {
    id: 7,
    text: "Are you open to adopting pets with special needs? (e.g., medical conditions, behavioral issues)",
    options: [
      { text: "Yes, I’m open to it", value: "neutral" },
      { text: "Maybe, depending on the situation", value: "neutral" },
      { text: "No, I prefer a pet without special needs", value: "neutral" },
    ],
  },
  {
    id: 8,
    text: "What’s your experience level with pets?",
    options: [
      { text: "Beginner (Never had a pet before)", value: "cat", image: Img10 },
      { text: "Intermediate (Had pets before but not recently)", value: "neutral", image: Img11 },
      { text: "Experienced (Currently have or had multiple pets)", value: "dog", image: Img12 },
    ],
  },
  {
    id: 9,
    text: "What kind of companionship are you looking for?",
    options: [
      { text: "A pet that can be independent", value: "cat" },
      { text: "A pet that enjoys constant companionship", value: "dog" },
      { text: "A balance between independence and companionship", value: "neutral" },
    ],
  },
];

export const calculateResult = (answers: string[]): 'cat' | 'dog' => {
  const score = answers.reduce(
    (acc, answer) => {
      if (answer === 'cat') acc.cat++;
      if (answer === 'dog') acc.dog++;
      return acc;
    },
    { cat: 0, dog: 0 }
  );

  return score.cat > score.dog ? 'cat' : 'dog';
};

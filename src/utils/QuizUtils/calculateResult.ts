export function calculateResult(answers: string[]): string {
    const dogCount = answers.filter((answer) => answer === 'dog').length;
    const catCount = answers.filter((answer) => answer === 'cat').length;

    if (dogCount > catCount) {
      return 'dog';
    } else if (catCount > dogCount) {
      return 'cat';
    } else {
  
      return 'neutral';
    }
  }
  
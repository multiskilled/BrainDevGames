// API client for API Ninjas
const API_BASE_URL = 'https://api.api-ninjas.com/v1';

export class ApiNinjasClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async fetchSudoku(difficulty = 'medium') {
    const validDifficulties = ['easy', 'medium', 'hard'];
    const diff = validDifficulties.includes(difficulty) ? difficulty : 'medium';
    
    const response = await fetch(`${API_BASE_URL}/sudoku?difficulty=${diff}`, {
      headers: {
        'X-Api-Key': this.apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`API Ninjas Sudoku API returned ${response.status}`);
    }

    return await response.json();
  }

  async fetchRiddles(limit = 3) {
    const response = await fetch(`${API_BASE_URL}/riddles?limit=${limit}`, {
      headers: {
        'X-Api-Key': this.apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`API Ninjas Riddles API returned ${response.status}`);
    }

    return await response.json();
  }
}

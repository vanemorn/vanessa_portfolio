// State shape for the newsletter
interface NewsletterState {
  subscribers: string[];
}

// Initial state with an empty subscribers array
const initialState: NewsletterState = {
  subscribers: [],
};

// Reducer function to handle actions
const newsletterReducer = (state = initialState, action: any): NewsletterState => {
  switch (action.type) {
    case 'SUBSCRIBE_TO_NEWSLETTER':
      return {
        ...state,
        subscribers: [...state.subscribers, action.payload], // Add new email to subscribers
      };
    default:
      return state;
  }
};

export default newsletterReducer;

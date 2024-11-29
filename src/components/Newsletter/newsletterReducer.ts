// newsletterReducer.ts
interface NewsletterState {
    subscribers: string[];
  }
  
  const initialState: NewsletterState = {
    subscribers: [],
  };
  
  const newsletterReducer = (state = initialState, action: any): NewsletterState => {
    switch (action.type) {
      case 'SUBSCRIBE_TO_NEWSLETTER':
        return {
          ...state,
          subscribers: [...state.subscribers, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default newsletterReducer;
  
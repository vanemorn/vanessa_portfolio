export const subscribeToNewsletter = (email: string) => {
    return {
      type: 'SUBSCRIBE_TO_NEWSLETTER', // The type of action that will be dispatched to Redux
      payload: email,   // The payload of the action containing the email that the user submitted
    };
  };
  
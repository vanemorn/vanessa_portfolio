// newsletterActions.ts
export const subscribeToNewsletter = (email: string) => {
    return {
      type: 'SUBSCRIBE_TO_NEWSLETTER',
      payload: email,
    };
  };
  
const FIREBASE_DOMAIN = 'https://book-review-app-9d2da-default-rtdb.firebaseio.com';

export async function getAllReviews() {
  const response = await fetch(`${FIREBASE_DOMAIN}/reviews.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch reviews.');
  }

  const loadedReviews = [];

  for (const key in data) {
    const reviewObj = {
      id: key,
      ...data[key],
    };

    loadedReviews.push(reviewObj);
  }

  return loadedReviews;
}

export async function getSingleReview(reviewId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/reviews/${reviewId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch review.');
  }

  const loadedReview = {
   
    ...data,
  };

  return loadedReview;
}

export default async function addReview(reviewData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/reviews.json`, {
    method: 'POST',
    body: JSON.stringify(reviewData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create review.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.reviewId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(reviewId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${reviewId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const loadedComments = [];

  for (const key in data) {
    const commentObj = {
     id: key,
      ...data[key],
    };

    loadedComments.push(commentObj);
  }

  return loadedComments;
}

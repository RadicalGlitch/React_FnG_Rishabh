const KEYS = {
  feedbacks: "feedbacks",
  feedbackId: "feedbackId",
};

export function insertFeedback(data) {
  let feedbacks = getAllFeedbacks();
  data["id"] = generateFeedbackId();
  feedbacks.push(data);
  localStorage.setItem(KEYS.feedbacks, JSON.stringify(feedbacks));
}

export function generateFeedbackId() {
  if (localStorage.getItem(KEYS.feedbackId) === null)
    localStorage.setItem(KEYS.feedbackId, "0");
  var id = parseInt(localStorage.getItem(KEYS.feedbackId));
  localStorage.setItem(KEYS.feedbackId, (++id).toString());
  return id;
}

export function getAllFeedbacks() {
  if (localStorage.getItem(KEYS.feedbacks) === null)
    localStorage.setItem(KEYS.feedbacks, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.feedbacks));
}

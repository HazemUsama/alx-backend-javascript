export default function getFullResponseFromAPI(success) {
  return new Promise((resole, reject) => {
    if (success) {
      resole({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error(
        'The fake API is not working currently',
      ));
    }
  });
}

const foodDataUrl =
    'https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json';

function fetchFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(foodDataUrl)
                .then((data) => resolve(data.json()))
                .catch((error) => reject('Error: ' + error));
        }, 1000);
    });
}

export { fetchFood, foodDataUrl };

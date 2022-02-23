async function fetchFood() {
    // try {
    //     const result = await fetch(
    //         'https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json'
    //     );
    //     const data = await result.json();
    //     return data;
    // } catch (error) {
    //     console.log('Error: ' + error);
    // }

    return fetch(
        'https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json'
    )
        .then((data) => data.json())
        .catch((error) => console.log('Error: ' + error));
}

export { fetchFood };

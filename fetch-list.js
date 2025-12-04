async function getCatFactsAA(factCount){
    try {
        const response = await fetch('https://meowfacts.herokuapp.com/?count='
        + factCount)
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    
    } catch (error){
        console.error('Error:', error.message);
        //throw error;
    }
    

}

async function callGetCatFactsAA(){
    const exam = await getCatFactsAA(3);
    console.log(exam.data);
}


function getCatFactsP(factCount){
    return fetch('https://meowfacts.herokuapp.com/?count=' + factCount)
        .then(response => {
            if (!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error(`Error:`, error.message);
            throw error;
        });
}

function callGetCatFactsP(){
    getCatFactsP(3).then(payload => {
        console.log(payload.data)
    });
}

callGetCatFactsAA(3);
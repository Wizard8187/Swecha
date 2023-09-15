document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const listItem = document.createElement('li');
        listItem.innerText = `Q: ${form.question.value}, A: ${form.answer.value}`;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); //
              
                const formData = new FormData(form);
                const postData = {};
              
                formData.forEach((value, key) => {
                  postData[key] = value;
                });
              
                try {
                    //Your API Link goes here
                  const response = await fetch('https://your-strapi-api.com/api/your-content-type', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(postData),
                  });
              
                  if (response.ok) {
                    console.log('Data submitted successfully');
                    form.reset(); 
                  } else {
                    
                    console.error('Error submitting data');
                  }
                } catch (error) {
                  
                  console.error('Network error:', error);
                }
              });
                });
    });

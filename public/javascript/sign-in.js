async function loginFormHandler(event) {
    event.preventDefault();
  // get handlebar id an add it here 
    const email = document.querySelector('#????').value.trim();
    const password = document.querySelector('#p???').value.trim();
  
    if (email && password) {

        // get end point and add it to fetch
      const response = await fetch('/?????', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
          console.log('success')
          // redirect to users page
        document.location.replace('/')
            } else {
        alert(response.statusText);
      }
    }
  }




  // get handlebar form/button an add it here 

document.querySelector('????').addEventListener('submit', loginFormHandler);
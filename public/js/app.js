const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#output')
const historyElement = document.querySelector('.history')
const newChatButtonElement = document.querySelector('.button')

async function getMessage() {
  console.log('clicked');

  try {
    const inputElement = {
      blend: document.getElementById("blend").value,
      flavor: document.getElementById("flavor").value,
      roast_level: document.getElementById("roast_level").value,
    };
    showLoadingMessage();

    const options = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blend: inputElement.blend,
        flavor: inputElement.flavor,
        roast_level: inputElement.roast_level,
      }),
    };

    const response = await fetch('https://qd7r29kll3.execute-api.us-east-2.amazonaws.com/PROD', options);
    const data = await response.text();

    console.log(data);

    hideLoadingMessage(); // Hide loading message once the API response is received

    const formattedResponseDiv = document.createElement('div');  // Create a container div for formatting
    formattedResponseDiv.className = 'formatted-response';  // Replace escaped newline characters with HTML line breaks
    formattedResponseDiv.innerHTML = data.replace(/\\n/g, '<br>'); // Clear previous content
    document.getElementById("outPutElement").innerHTML = ''; // Append the container to the output element
    document.getElementById("outPutElement").appendChild(formattedResponseDiv);

  
    if (data && inputElement.blend && inputElement.flavor && inputElement.roast_level) {
    const h3Element = document.createElement('h3');
    h3Element.textContent = 'CoffeeAI: ' + inputElement.blend + ', ' + inputElement.flavor + ', ' + inputElement.roast_level;
    formattedResponseDiv.prepend(h3Element);
    const pElement = document.createElement('p');
    pElement.textContent = inputElement.blend + ',' + ' ' + inputElement.flavor + ',' + ' ' + inputElement.roast_level;
    historyElement.append(pElement);
    }
  } catch (error) {
    console.error(error);
    hideLoadingMessage(); // Hide loading message in case of an error
  }
}

function showLoadingMessage() {
  // Display a loading message or spinner
  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = 'Loading...';
  loadingMessage.className = 'loading-message';
  document.getElementById("loadingContainer").appendChild(loadingMessage);
}

function hideLoadingMessage() {
  const loadingMessage = document.querySelector('.loading-message');
  if (loadingMessage) {
    loadingMessage.remove();
  }
}

submitButton.addEventListener('click', getMessage)

function clearInput() {
  document.getElementById("blend").value = '';
  document.getElementById("flavor").value = '';
  document.getElementById("roast_level").value = '';
}

document.addEventListener('DOMContentLoaded', function () {
  console.log(newChatButtonElement);
  newChatButtonElement.addEventListener('click', clearInput);
});

const inputs = document.querySelectorAll(".input-field");

inputs.forEach(inp => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if(inp.value != "") return;
    inp.classList.remove("active");
  });
});

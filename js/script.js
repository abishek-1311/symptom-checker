const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFiaGlzaGVrdDEzMTFAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxMDI0OCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjMtMDktMTMiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2OTUxMDc1MDYsIm5iZiI6MTY5NTEwMDMwNn0.w59uWbn8tkMGBXnImAU9PRidYoIeBGW65WqqaQSKF34';  
// Replace with your actual API key.... API key is expired after sometimes so kindly generate new api key from the below url
    const endpoint = 'https://healthservice.priaid.ch';
    const symptomsEndpoint = `${endpoint}/symptoms`;
    const language = 'en-gb';  // Replace with the desired language code

    let symptomsData = []; // Store the symptoms data globally

    async function fetchSymptoms() {
        try {
            const url = new URL(symptomsEndpoint);
            const params = {
                token: apiKey,
                language: language
            };
            url.search = new URLSearchParams(params).toString();

            const response = await fetch(url, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            symptomsData = await response.json();
            populateSelect(symptomsData);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    function populateSelect(symptoms) {
        const selectElement = document.getElementById('symptoms');
        if (selectElement) {
            selectElement.innerHTML = ''; // Clear previous options
            symptoms.forEach(symptom => {
                const option = document.createElement('option');
                option.value = symptom.ID;
                option.text = symptom.Name;
                selectElement.appendChild(option);
            });
        }
    }

    function filterSymptoms() {
        const input = document.getElementById('symptomInput').value.toLowerCase();
        const filteredSymptoms = symptomsData.filter(symptom => symptom.Name.toLowerCase().includes(input));
        populateSelect(filteredSymptoms);
    }

    fetchSymptoms();

    // Function to get the diagnosis and display the issue name
    const apiKey2 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFiaGlzaGVrdDEzMTFAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxMDI0OCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjEwOSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiIxMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJCYXNpYyIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjMtMDktMTMiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2OTUxMDc1MDYsIm5iZiI6MTY5NTEwMDMwNn0.w59uWbn8tkMGBXnImAU9PRidYoIeBGW65WqqaQSKF34';  // Replace with your actual API key
   // Replace with your actual API key.... API key is expired after sometimes so kindly generate new api key from the below url
    const endpoint2 = 'https://healthservice.priaid.ch';
    const diagnosisEndpoint = `${endpoint2}/diagnosis`;
   

    async function getDiagnosis() {
        const gender = document.getElementById('gender').value;
        const yearOfBirth = document.getElementById('yearOfBirth').value;
    

        try {
            const url = new URL(diagnosisEndpoint);
            const params = {
                symptoms: "["+getSelectedSymptoms()+"]",
                gender,
                year_of_birth: yearOfBirth,
                token: apiKey2,
                format: 'json',
                language
            };
            url.search = new URLSearchParams(params).toString();

            const response = await fetch(url, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            displayDiagnosis(data);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    function getSelectedSymptoms() {
        const selectElement = document.getElementById('symptoms');
        const selectedSymptoms = [];
        for (const option of selectElement.options) {
            if (option.selected) {
                selectedSymptoms.push(option.value);
            }
        }
        return selectedSymptoms;
    }

    function displayDiagnosis(data) {
        const diagnosisDiv = document.getElementById('diagnosis');
        const diagnosisName = document.getElementById('diagnosisName');
    
        if (data && data.length > 0) {
            const issueNames = data.map(issue => issue.Issue.Name);
            diagnosisName.textContent = `Diagnosis: ${issueNames.join(', ')}`;
        } else {
            diagnosisName.textContent = 'No diagnosis found.';
        }
    
        // Apply styles to the diagnosis <div>
        diagnosisDiv.style.backgroundColor = 'grey';
        diagnosisDiv.style.color = 'black';
    }
    
    



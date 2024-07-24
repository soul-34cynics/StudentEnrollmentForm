document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('saveBtn').addEventListener('click', saveData);
});

function saveData() {
  const rollNo = document.getElementById('rollNo').value;
  const fullName = document.getElementById('fullName').value;
  const classValue = document.getElementById('class').value;
  const birthDate = document.getElementById('birthDate').value;
  const address = document.getElementById('address').value;
  const enrollmentDate = document.getElementById('enrollmentDate').value;

  if (rollNo && fullName && classValue && birthDate && address && enrollmentDate) {
      const student = {
          Roll_No: rollNo,
          Full_Name: fullName,
          Class: classValue,
          Birth_Date: birthDate,
          Address: address,
          Enrollment_Date: enrollmentDate,
      };

      fetch('/data', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(student),
      })
      .then(response => response.json())
      .then(data => {
          const statusMessage = document.getElementById('statusMessage');
          if (data && data.status === 'success') {
              statusMessage.textContent = 'Data saved successfully!';
              statusMessage.style.color = 'green';
              resetForm();
          } else {
              showError('Error saving data: ' + (data.message || 'Unknown error'));
          }
      })
      .catch(error => {
          console.error('Error:', error);
          showError('Error saving data.');
      });
  } else {
      showError('Please fill out all fields.');
  }
}

function showError(message) {
  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = message;
  statusMessage.style.color = 'red';
}

function resetForm() {
  document.getElementById('studentForm').reset();
}

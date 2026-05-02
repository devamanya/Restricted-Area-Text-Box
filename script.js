const textarea = document.getElementById('message');
const charCount = document.getElementById('char-count');
const warningText = document.getElementById('warning-text');
const maxLimit = parseInt(textarea.getAttribute('maxlength'));

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    
    // Update the counter text
    charCount.textContent = currentLength;

    // Logic for visual feedback
    if (currentLength >= maxLimit) {
        textarea.classList.add('limit-reached');
        warningText.classList.remove('hidden');
        charCount.style.color = '#ef4444'; // Red counter
    } else {
        textarea.classList.remove('limit-reached');
        warningText.classList.add('hidden');
        charCount.style.color = '#64748b'; // Normal counter
    }
});

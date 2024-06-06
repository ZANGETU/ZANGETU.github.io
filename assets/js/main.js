document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to YURIRI Site (⩌ˬ⩌)";
    const typingTextElement = document.getElementById("typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            typingTextElement.innerHTML = text; 
        }
    }
    type();
});

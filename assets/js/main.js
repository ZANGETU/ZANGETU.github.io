document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to YURIRI Site (⩌ˬ⩌)";
    const typingTextElement = document.getElementById("typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // 文字を表示する間隔（ミリ秒）
        } else {
            typingTextElement.innerHTML = text; // 最後に文字列を設定
        }
    }
    type();
});

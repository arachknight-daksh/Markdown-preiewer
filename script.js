// script.js
document.getElementById('markdown-input').addEventListener('input', function() {
    const input = this.value;
    document.getElementById('markdown-preview').innerHTML = marked(input);
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('markdown-input').value = '';
    document.getElementById('markdown-preview').innerHTML = '';
});

document.getElementById('download-button').addEventListener('click', function() {
    const markdown = document.getElementById('markdown-input').value;
    const blob = new Blob([markdown], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'markdown.html';
    a.click();
    URL.revokeObjectURL(url);
});
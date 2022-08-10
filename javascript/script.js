var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    display(form);
});

function display() {
    console.group("========= From Submission =========");
    console.log("Name:", form.name);
    console.log("Email:", form.email);
    console.log("Message:", form.message);
    console.groupEnd();
    return;
}
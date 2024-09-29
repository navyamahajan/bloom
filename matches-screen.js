document.addEventListener("DOMContentLoaded", function() {
    const likeButton = document.getElementById("like");
    const dislikeButton = document.getElementById("dislike");

    likeButton.addEventListener("click", () => {
        window.location.href = "you-matched.html";
    });

    dislikeButton.addEventListener("click", () => {
        // Reload the page to show a new potential match
        window.location.reload();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", function() {
        window.location.href = "skillswap.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const formData = new FormData(form);
        const learnSkills = formData.get("learn_skills");
        const teachSkills = formData.get("teach_skills");
        const rematch = formData.get("rematch");
        const differentSkillMatch = formData.get("different_skill_match");
        console.log("Learn Skills:", learnSkills);
        console.log("Teach Skills:", teachSkills);
        console.log("Rematch:", rematch);
        console.log("Different Skill Match:", differentSkillMatch);
        window.location.href = "matches-screen.html";
    });
});

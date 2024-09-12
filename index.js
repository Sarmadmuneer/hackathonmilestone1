// const toggleButton = document.getElementById('togglebutton') as HTMLButtonElement|null;
// const skillsDiv = document.getElementById('skills') as HTMLDivElement|null;
// if (toggleButton && skillsDiv) {
//     toggleButton.addEventListener('click',()=>{
//         if (skillsDiv.style.display === 'none') {
//             skillsDiv.style.display = 'block';
//             toggleButton.value = "Hide Skills";
//         } else {
//             skillsDiv.style.display = 'none';
//             toggleButton.value = 'Show Skills';
//         }
//     });
// }
// else {
//     console.log("Required element not found in theDOM");
// };
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', function () {
            skillsSection.classList.toggle('hidden');
            // Update button text based on section visibility
            if (skillsSection.classList.contains('hidden')) {
                toggleSkillsButton.textContent = 'Show Skills';
            }
            else {
                toggleSkillsButton.textContent = 'Hide Skills';
            }
        });
    }
});

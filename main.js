document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-experiences")
    const olderExperiences = document.getElementById("older-experiences")
  
    if (toggleButton && olderExperiences) {
      toggleButton.addEventListener("click", () => {
        // Toggle the expanded class
        if (olderExperiences.classList.contains("collapsed")) {
          olderExperiences.classList.remove("collapsed")
          olderExperiences.classList.add("expanded")
          toggleButton.classList.add("active")
        } else {
          olderExperiences.classList.add("collapsed")
          olderExperiences.classList.remove("expanded")
          toggleButton.classList.remove("active")
        }
      })
    }
  })
  